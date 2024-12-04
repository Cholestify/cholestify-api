const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class mealfoodService {
  static async newMealFood(userId, foodId, type, time) {
    try {
      // Membuat entri baru di tabel meal_food
      const newwMealFood = await prisma.mealFood.create({
        data: {
          userId: userId,
          foodId: foodId,
          type: type,
          time: new Date(time),
        },
      });

      return newwMealFood; // Mengembalikan data mealFood yang baru dibuat
    } catch (error) {
      // Menangani error yang terjadi saat pembuatan mealFood
      throw new Error("Failed to create new meal: " + error.message);
    }
  }

  static async getAllMealFoods() {
    const foods = await prisma.mealFood.findMany();
    return foods;
  }

  static async updateMealFood(id, userId, foodId, type, time) {
    try {
      return await prisma.mealFood.update({
        where: {
          id: Number(id),
        },
        data: {
          userId: Number(userId),
          foodId: Number(foodId),
          type,
          time,
        },
      });
    } catch (error) {
      console.error("Error in updateMealFood:", error);
      throw new Error(`Database error: ${error.message}`);
    }
  }

  static async deleteMealFood(id) {
    return await prisma.mealFood.delete({
      where: { id: Number(id) },
    });
  }
}

module.exports = mealfoodService;
