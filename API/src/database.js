import mongoose from "mongoose";
import {uri} from './Utils/Const';

export async function connect() {
    try {
        await mongoose.createConnection(uri, {
            bufferCommands: false, // Disable mongoose buffering
            bufferMaxEntries: 0, // and MongoDB driver buffering
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('Conectado a la DB');
    }
    catch(err) {
        console.log(`Algo ha fallado en la conexión, ${err}`);
    }
}

