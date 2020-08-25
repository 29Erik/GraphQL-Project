import {Soldier} from './Models/Employee'

export const resolvers = {
    Query: {
        name(root, {name}){
            return `Hola ${name}`;
        },
        lastName: () => {
            return 'Reina';
        },
        age: () => {
            return 23;
        },
        sick: () => {
            return true;
        }
    },
    Mutation: {
        createEmployee(_, {emp}) {
            console.log(emp);
            return `Creo el emp ${emp}`;
        }
    }
}
