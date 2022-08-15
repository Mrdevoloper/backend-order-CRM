const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const app = express();
const modules = require('./modules');
const PORT = process.env.PORT || 9000;
const cors = require('cors');
app.use(cors());

const server = new ApolloServer({
	modules,
	introspection: true,
	playground: true,
});
server.applyMiddleware({ app });

const httpCerver = http.createServer(app);

httpCerver.listen(PORT, console.log(PORT + server.graphqlPath));
