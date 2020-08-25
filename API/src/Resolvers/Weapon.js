import {WeaponModel} from '../Models/Weapon'

export const WeaponResolvers = {
    Query: {
        getById(root, {id}){
            return `Hola ${name}`;
        },
        getAll(root, args) {

        }
    },
    Mutation: {
        async createWeapon(_, {weapon}) {
            const newWeapon = new WeaponModel(weapon);
            await newWeapon.save();
            return newWeapon;
        },
        updateWeapon() {

        },
        deleteWeapon() {

        }
    }
}
