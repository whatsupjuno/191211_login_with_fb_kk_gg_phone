import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchFromTag: async (_, args) =>
      prisma.tags({
        where: {
          OR: [{ tagName_contains: args.term }]
        }
      })
  }
};
