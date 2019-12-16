import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchFromAsset: async (_, args) =>
      prisma.assets({
        where: {
          OR: [{ assetName_contains: args.term }]
        }
      })
  }
};
