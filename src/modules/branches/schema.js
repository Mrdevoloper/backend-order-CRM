const { gql } = require('apollo-server-express')

module.exports = gql `
    type Branches {
          id: ID!
          name: String!
          pic: String!
          refId: time 
    }

    extend type Query {
        brenches:[Branches!]
        branches(resId: ID!): [Branches!]!
    }

    extend type Mutation {
        newBranch(name: String! pic: String! refId: time): Branches!
        deletebranch(id: ID!):Branches! 
    }
`

