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
    });
  }

  static async updateHistory(id, newNumber) {
    return await prisma.cholesterolHistory.update({
      where: {
        id: Number(id),
      },
      data: {
        number: newNumber,
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
