import mongoose from "mongoose";
import {uri} from './Utils/Const';

export async function connect() {
    try {
        await mongoose.createConnection(uri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false
        })
        console.log('Conectado a la DB');
    }
    catch(err) {
        console.log(`Algo ha fallado en la conexión, ${err}`);
    }
}

