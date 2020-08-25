import {DivisionModel} from '../Models/Division'

export const DivisionResolvers = {
    Query: {
        getById(root, {id}){
            return `Hola ${name}`;
        },
        getAll(root, args) {

        }
    },
    Mutation: {
        async createDivision(_, {division}) {
            const newDivision = new DivisionModel(division);
            await newDivision.save();
            return newDivision;
        },
        updateDivision() {

        },
        deleteDivision() {

        }
    }
}
