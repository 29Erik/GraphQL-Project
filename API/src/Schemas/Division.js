export default `
    type Query {
        getDivisionById(id: ID!): Division
        getAllDivisions: [Division]
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
        qty: Int!
    }
`;
