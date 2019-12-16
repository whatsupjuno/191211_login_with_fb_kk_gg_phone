import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    unregisterAsset: async (_, args) => {
      const { partNumber } = args;

      const asset = await prisma.asset({ partNumber });

      await prisma.deleteAsset({
        id: asset.id
      });

      return true;
    }
  }
};
