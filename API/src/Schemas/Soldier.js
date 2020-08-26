export default `
    type Query {
        getSoldierById(id: ID!): Soldier
        getAllSoldiers: [Soldier]
    }
    
    type Mutation {
        createSoldier(soldier: SoldierCreate!) : Soldier
        updateSoldier(id: ID!, sold: SoldierUpdate!) : Soldier
        deleteSoldier(id: ID!) : String
    }
    
    enum SoldierRole {
        SGT
        CRL
        PVT
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
