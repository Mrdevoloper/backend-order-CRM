const { gql } = require('apollo-server-express');

module.exports = gql`
	type Orders {
		id: ID!
		name: String
		userName: String!
		userNumber: String!
		userLocation: String!
		time: time
	}
	type Mutation {
		newOrder(
			name: String!
			userName: String!
			userNumber: String!
			userLocation: String!
		): Orders!
		deleteOrders(id: ID!): Orders!
	}

	extend type Query {
		orders: [Orders!]!
	}
`;
