// Importación de express
import express from "express";
// Importar el modulo para procesar las rutas con graphql
const graphqlHTTP = require('express-graphql').graphqlHTTP;
// Importar el schema
import schema from './Schemas/schema';
// Conectar a la db
import {connect} from './database';

// Constructor de express que permite ejecución
const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

//Declaramos el puerto
const port = 3000;
// Sincronización del puerto con el server
app.listen(port, () => console.log(`Server en ${port}`))
