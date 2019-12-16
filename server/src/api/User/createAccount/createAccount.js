import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { name, loginSecret } = args;
      const exists = await prisma.$exists.user({ name });

      if (exists) {
        throw Error("Alreay signed with this name");
      }

      await prisma.createUser({
        name,
        loginSecret
      });
      return true;
    }
  }
};
