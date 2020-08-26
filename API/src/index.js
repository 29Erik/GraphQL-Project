// Importación de express
import express from "express";
// Importar el modulo para procesar las rutas con graphql
const graphqlHTTP = require('express-graphql').graphqlHTTP;
// Importar el schema
import schema from './Schemas/index';
import resolvers from './Resolvers/index';
// Conectar a la db
import {connect} from './database';
import {port} from './Utils/Const';
import {makeExecutableSchema} from "@graphql-tools/schema";

// Constructor de express que permite ejecución
const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers
})

app.use('/graphql', graphqlHTTP({
    graphiql: true
}))

// Sincronización del puerto con el server
app.listen(port, () => console.log(`Server en ${port}`))
