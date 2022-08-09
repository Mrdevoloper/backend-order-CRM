const { gql } = require('apollo-server-express')

module.exports = gql `
    type Foods {
          id: ID!
          name: String!
          pic: String!
          price: String!
          refId: time
    }

    extend type Query {
        foods(branchId: ID!): [Foods!]!
        all_foods:[Foods!]
    }

    extend type Mutation {
        newFoods(name: String! pic: String! price: String! refId: time): Foods!
        deleteFoods(id: ID!):Foods! 
    }
`

