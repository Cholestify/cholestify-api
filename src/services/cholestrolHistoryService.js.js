const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class CholesterolHistoryService {
  static async newHistory(userId, number) {
    return await prisma.cholesterolHistory.create({
      data: {
        userId: Number(userId), // Pastikan userId berupa angka
        number: number,
        date: new Date(),
      },
    });
  }

  static async findCholesterolHistoryByUserId(userId) {
    return await prisma.cholesterolHistory.findMany({
      where: {
        userId: Number(userId),
      },
      orderBy: {
        date: "desc",
      },
    });
  }

  static async findCholesterolRecentHistoryByUserId(userId) {
    return await prisma.cholesterolHistory.findFirst({
      where: {
        userId: Number(userId),
      },
      orderBy: {
        date: "desc",
      },
    });
  }

  static async updateRecentHistory(userId, number) {
    const recentHistory = await prisma.cholesterolHistory.findFirst({
      where: {
        userId: Number(userId),
      },
      orderBy: {
        date: "desc",
      },
    });

    if (!recentHistory) {
      throw new Error(`No cholesterol history found for userId: ${userId}`);
    }

    return await prisma.cholesterolHistory.update({
      where: {
        id: recentHistory.id,
      },
      data: {
        number: number,
        date: new Date(),
      },
    });
  }

  static async deleteHistory(id) {
    return await prisma.cholesterolHistory.delete({
      where: { id: Number(id) },
    });
  }
}

module.exports = CholesterolHistoryService;
