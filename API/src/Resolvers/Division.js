import {DivisionModel} from '../Models/Division';

export const DivisionResolvers = {
    Query: {
        async getById(root, {id}){
            return await DivisionModel.findById(id);
        },
        async getAll(root, args) {
            return await DivisionModel.find();
        }
    },
    Mutation: {
        async createDivision(_, {division}) {
            const newDivision = new DivisionModel(division);
            await newDivision.save();
            return newDivision;
        },
        async updateDivision(_, {id, divisionUpdated}) {
            await DivisionModel.findByIdAndUpdate(id, divisionUpdated);
            return `Division Updated`;
        },
        async deleteDivision(_, {id}) {
            await DivisionModel.findByIdAndDelete(id);
            return `Division Deleted`;
        }
    }
}
