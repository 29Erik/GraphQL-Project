import {SoldierModel} from '../Models/Soldier'

export const SoldierResolvers = {
    Query: {
        getById(root, {id}){
            return `Hola ${name}`;
        },
        getAll(root, args) {

        }
    },
    Mutation: {
        async createSoldier(_, {soldier}) {
            const newSoldier = new SoldierModel(soldier);
            await newSoldier.save();
            return newSoldier;
        },
        updateSoldier() {

        },
        deleteSoldier() {

        }
    }
}
