// Importación de express
import express from "express";

// Constructor de express que permite ejecución
const app = express();

//Declaramos el puerto
const port = 3000;
// Sincronización del puerto con el server
app.listen(port, () => console.log(`Server en ${port}`))
