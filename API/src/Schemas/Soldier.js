import {makeExecutableSchema} from 'graphql-tools';
import {SoldierResolvers} from '../Resolvers/Soldier';

const typeDefs = `
    type Query {
        getById(id: ID!): Soldier
        getAll(): [Soldier]
    }
    
    type Mutation {
        createSoldier(sold: SoldierCreate!) : Soldier
        updateSoldier(sold: SoldierUpdate!) : Soldier
        deleteSoldier(id: ID!) : String
    }
    
    type Soldier {
        _id: ID
        name: String!
        lastName: String!
        role: SoldierRole!
        damage: Int!
        senseArea: Int
        health: Int
    }
    
    enum SoldierRole {
        SGT
        CRL
        PVT
    }
    
    input SoldierCreate {
        name: String!
        lastName: String!
        role: SoldierRole!
        damage: Int!
        senseArea: Int
        health: Int
    }
    
    input SoldierUpdate {
        _id: ID!
        name: String!
        lastName: String!
        role: SoldierRole!
        damage: Int!
        senseArea: Int
        health: Int
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: SoldierResolvers
})