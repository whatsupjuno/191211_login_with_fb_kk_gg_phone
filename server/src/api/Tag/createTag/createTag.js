import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createTag: async (_, args) => {
      console.log(`args is ${args}`);
      const { tagName } = args;

      const exists = await prisma.$exists.tag({ tagName });

      if (exists) throw Error("Already");

      await prisma.createTag({
        tagName
      });

      return true;
    }
  }
};
