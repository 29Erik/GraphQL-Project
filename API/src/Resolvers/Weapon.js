import {WeaponModel} from '../Models/Weapon';

export const WeaponResolvers = {
    Query: {
        async getById(root, {id}){
            return await WeaponModel.findById(id);
        },
        async getAll(root, args) {
            return await WeaponModel.find();
        }
    },
    Mutation: {
        async createWeapon(_, {weapon}) {
            const newWeapon = new WeaponModel(weapon);
            await newWeapon.save();
            return newWeapon;
        },
        async updateWeapon(_, {id, weaponUpdated}) {
            await WeaponModel.findByIdAndUpdate(id, weaponUpdated);
            return `Weapon Updated`;
        },
        async deleteWeapon(_, {id}) {
            await WeaponModel.findByIdAndDelete(id);
            return `Weapon Deleted`;
        }
    }
}
