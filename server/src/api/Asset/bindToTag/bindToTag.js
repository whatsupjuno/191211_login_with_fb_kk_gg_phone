import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    bindToTag: async (_, args) => {
      const { assetId, tagId } = args;
      try {
        await prisma.updateAsset({
          where: { id: assetId },
          data: {
            tag: {
              connect: {
                id: tagId
              }
            }
          }
        });
        return true;
      } catch {
        return false;
      }
    }
  }
};
