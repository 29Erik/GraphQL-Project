import WeaponModel from "../Models/Weapon";

const SoldierModel = require('../Models/Soldier');

export default {
    Query: {
        async getSoldierById(root, {id}){
            return await SoldierModel.findById(id);
        },
        async getAllSoldiers(root, args) {
            return SoldierModel.find();
        }
    },
    Mutation: {
        async createSoldier(_, {soldier}) {
            const newSoldier = new SoldierModel(soldier);
            await newSoldier.save();
            return newSoldier;
        },
        async updateSoldier(_, {id, soldierUpdate}) {
            await SoldierModel.findByIdAndUpdate(id, soldierUpdate);
            return `Soldier Updated`;
        },
        async deleteSoldier(_, {id}) {
            await SoldierModel.findByIdAndDelete(id);
            return `Soldier Deleted`;
        }
    }
}
