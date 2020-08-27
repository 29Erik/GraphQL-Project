// Importación de express
import express from "express";
// Importar el modulo para procesar las rutas con graphql
const graphqlHTTP = require('express-graphql').graphqlHTTP;
// Importar el schema
import schema from './Schemas/index';
import resolvers from './Resolvers/index';
import {connect} from './database';
import {port} from './Utils/Const';
import {makeExecutableSchema} from "@graphql-tools/schema";

// Constructor de express que permite ejecución
const app = express();
// Conectar a la db
connect().then(res => {
    console.log(`Conectado a la DB`)
}).catch(err => {
    console.log(`Fallo ${err}`)
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

const schemaLocal = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers,
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schemaLocal
}));

// Sincronización del puerto con el server
app.listen(port, () => console.log(`Server en ${port}`))
