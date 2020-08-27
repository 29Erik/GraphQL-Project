import mongoose from "mongoose";
import {uri, uriLocal} from './Utils/Const';

export function connect() {
    return mongoose.connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useFindAndModify: false
    });
}

