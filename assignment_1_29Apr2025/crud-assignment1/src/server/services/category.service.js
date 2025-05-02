import prisma from "../prismaClient.js"; // Assuming you have a prisma client file.

const categoryService = {
  create: async ({ name }) => {
    try {
      return await prisma.category.create({
        data: { name },
      });
    } catch (err) {
      throw new Error("Failed to create category");
    }
  },

  findAll: async () => {
    try {
      return await prisma.category.findMany();
    } catch (err) {
      throw new Error("Failed to retrieve categories");
    }
  },

  findById: async (id) => {
    try {
      return await prisma.category.findUnique({
        where: { id },
      });
    } catch (err) {
      throw new Error("Failed to retrieve category by ID");
    }
  },
};

export default categoryService;
