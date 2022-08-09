const http = require('http')
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const app = express()
const modules = require('./modules')
const server = new ApolloServer({
    modules
})
server.applyMiddleware({ app })

const httpCerver = http.createServer(app)

httpCerver.listen(9000, console.log(9000 + server.graphqlPath))