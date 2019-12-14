import { GraphQLServer } from "graphql-yoga";
import { gql } from "apollo-boost";
import logger from "morgan";

import { isAuthenticated } from "./middlewares";
import schema from "./schema";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema
});

server.express.use(logger("dev"));

server.start({ port: PORT }, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
