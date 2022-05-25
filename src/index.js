const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

//const urldb = "mongodb://admin:123456@127.0.0.1/admin";
const urldb =
  "mongodb+srv://edilson:Alunos123@clusterapi.fkxyi.mongodb.net/basegraphql?retryWrites=true&w=majority";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => console.log(`Servidor on-line em ${url}`))
  .catch((erro) => console.error(`Erro ao executar o servidor -> ${erro}`));
