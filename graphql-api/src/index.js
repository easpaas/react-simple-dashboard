const { ApolloServer, gql } = require('apollo-server');

// Define your schema
const typeDefs = gql`
  type Query {
    hello: String
    number: Int
  }

  type Mutation {
    updateMessage(newMessage: String!): String
  }
`;

// Define your resolvers
let message = "Hello, World!";
const resolvers = {
  Query: {
    hello: () => "Welcome to GraphQL API!",
    number: () => Math.floor(Math.random() * 100),
  },
  Mutation: {
    updateMessage: (_, { newMessage }) => {
      message = newMessage;
      return message;
    },
  },
};

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

