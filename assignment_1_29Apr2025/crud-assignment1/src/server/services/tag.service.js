import prisma from "../prismaClient.js";

const tagService = {
  create: async ({ name }) => {
    try {
      return await prisma.tag.create({
        data: { name },
      });
    } catch (err) {
      throw new Error("Failed to create tag");
    }
  },

  findAll: async () => {
    try {
      return await prisma.tag.findMany();
    } catch (err) {
      throw new Error("Failed to retrieve tags");
    }
  },

  findById: async (id) => {
    try {
      return await prisma.tag.findUnique({
        where: { id },
      });
    } catch (err) {
      throw new Error("Failed to retrieve tag by ID");
    }
  },
};

export default tagService;
