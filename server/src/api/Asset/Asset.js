import { prisma } from "../../../generated/prisma-client";

export default {
  Asset: {
    tag: ({ id }) => prisma.asset({ id }).tag()
  }
};
