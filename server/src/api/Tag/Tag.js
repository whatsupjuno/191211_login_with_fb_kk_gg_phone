import { prisma } from "../../../generated/prisma-client";

export default {
  Tag: {
    asset: ({ id }) => prisma.tag({ id }).asset()
  }
};
