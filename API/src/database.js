import mongoose from "mongoose";
import {uri} from './Utils/Const';

let conn = null

export async function connect() {
    try {
        conn = await mongoose.createConnection(uri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false
        })
        console.log('Conectado a la DB');
        return conn;
    }
    catch(err) {
        console.log(`Algo ha fallado en la conexión, ${err}`);
    }
}

