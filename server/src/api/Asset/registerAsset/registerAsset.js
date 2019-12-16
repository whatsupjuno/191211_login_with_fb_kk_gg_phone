import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    registerAsset: async (_, args) => {
      const {
        partNumber,
        partName,
        assetNumber,
        assetName,
        stockQuantity,
        outQuantity
      } = args;

      const exists = await prisma.$exists.asset({ partName });

      if (exists) throw Error("Alreay");

      await prisma.createAsset({
        partNumber,
        partName,
        assetNumber,
        assetName,
        stockQuantity,
        outQuantity
      });
      return true;
    }
  }
};
