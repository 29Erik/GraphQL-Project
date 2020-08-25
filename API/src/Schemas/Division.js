import {makeExecutableSchema} from 'graphql-tools';
import {DivisionResolvers} from '../Resolvers/Division';

const typeDefs = `
    type Query {
        getById(id: ID!): Division
        getAll(): [Division]
    }
    
    type Mutation {
        createDivision(division: DivisionCreate!) : Division
        updateDivision(id: ID, division: DivisionUpdate!) : Division
        deleteDivision(id: ID!) : String
    }
    
    type Division {
        _id: ID
        name: String!
        positions: Int!
        qty: Int!
    }
    
    input DivisionCreate {
        name: String!
        positions: Int!
        qty: Int!
    }
    
    input DivisionUpdate {
        _id: ID!
        name: String!
        positions: String!
        qty: SoldierRole!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: DivisionResolvers
})
