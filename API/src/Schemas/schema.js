import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from '../Resolvers/resolvers';

const typeDefs = `
    type Query {
        name(name: String!): String
        lastName: String
        age: Int
        sick: Boolean
    }
    
    type Employee {
        _id: ID
        name: String!
        lastName: String!
    }
    
    input EmployeeInput {
        name: String!
        lastName: String!
    }
    
    type Mutation {
        createEmployee(emp: EmployeeInput) : Employee
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
