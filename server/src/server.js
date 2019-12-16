import { GraphQLServer } from "graphql-yoga";
import { gql } from "apollo-boost";
import logger from "morgan";

import schema from "./schema";
import { authenticateJwt } from "./passport";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
