export default `
    type Query {
        getWeaponById(id: ID!): Weapon
        getAllWeapons: [Weapon]
    }
    
    type Mutation {
        createWeapon(sold: WeaponCreate!) : Weapon
        updateWeapon(id: ID, sold: WeaponUpdate!) : Weapon
        deleteWeapon(id: ID!) : String
    }
    
    enum WeaponType {
        MELE
        DISTANCE
    }
    
    type Weapon {
        _id: ID
        name: String!
        damage: Int!
        type: WeaponType!
    }
    
    input WeaponCreate {
        name: String!
        damage: Int!
        type: WeaponType!
    }
    
    input WeaponUpdate {
        _id: ID!
        name: String!
        damage: String!
        type: WeaponType!
    }
`;
