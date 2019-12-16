import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      console.log(`confirmSecret/args : ${JSON.stringify(args)}`);
      const { name, secret } = args;
      const user = await prisma.user({ name });
      console.log(`user is ${user.id}`);
      if (user.loginSecret === secret) {
        await prisma.updateUser({
          where: { id: user.id },
          data: {
            loginSecret: ""
          }
        });
        return generateToken(user.id);
      } else {
        throw Error("You are WORNG!!!!!");
      }
    }
  }
};
