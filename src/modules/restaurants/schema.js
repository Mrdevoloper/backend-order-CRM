const { gql } = require('apollo-server-express')

module.exports = gql `
    type Restaurants {
          id: ID!
          name: String!
          pic: String!
    }

    extend type Query {
        restaurants: [ Restaurants! ]
    }

    extend type Mutation {
        newCategory( name:String! pic: String! ): Restaurants!
        deleteCategory(id: ID!):Restaurants! 
    }
`