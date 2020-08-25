import {makeExecutableSchema} from 'graphql-tools';
import {WeaponResolvers} from '../Resolvers/Weapon';

const typeDefs = `
    type Query {
        getById(id: ID!): Weapon
        getAll(): [Weapon]
    }
    
    type Mutation {
        createWeapon(sold: WeaponCreate!) : Weapon
        updateWeapon(sold: WeaponUpdate!) : Weapon
        deleteWeapon(id: ID!) : String
    }
    
    type Weapon {
        _id: ID
        name: String!
        damage: Int!
        type: Int!
    }
    
    input WeaponCreate {
        name: String!
        damage: Int!
        type: Int!
    }
    
    input WeaponUpdate {
        _id: ID!
        name: String!
        damage: String!
        type: SoldierRole!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: WeaponResolvers
})
