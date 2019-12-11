import { GraphQLServer } from "graphql-yoga";
import { gql } from "apollo-boost";

const typeDefs = gql`
  type Query {
    sayHello: String!
  }
`;
const resolvers = {
  Query: {
    sayHello: () => "Hello"
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log(`Server is running on http://localhost:4000`);
});
