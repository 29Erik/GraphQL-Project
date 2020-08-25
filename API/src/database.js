import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://Testimony:@Thomas1408@ageofwar.plk2d.mongodb.net/AgeofWar?retryWrites=true&w=majority', {
            useNewUrlParser: true
        })
        console.log('Conectado a la DB');
    }
    catch(err) {
        console.log(`Algo ha fallado en la conexión, ${err}`);
    }
}

