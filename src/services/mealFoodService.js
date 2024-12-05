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

      return newwMealFood;
    } catch (error) {
      throw new Error("Failed to create new meal: " + error.message);
    }
  }

  static async getAllMealFoods(userId) {
    const foods = await prisma.mealFood.findMany({
      where: {
        userId: Number(userId),
      },
      include: {
        food: true,
      },
      orderBy: {
        time: "desc",
      },
    });
    return foods.map((meal) => ({
      id: meal.id,
      userId: meal.userId,
      foodId: meal.foodId,
      name: meal.food.food,
      type: meal.type,
      time: meal.time,
      createdAt: meal.createdAt,
      updatedAt: meal.updatedAt,
    }));
  }

  static async getAllMealFoodsThisDay(userId) {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const foods = await prisma.mealFood.findMany({
      where: {
        userId: Number(userId),
        time: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        food: true,
      },
      orderBy: {
        time: "desc",
      },
    });

    return foods.map((meal) => ({
      id: meal.id,
      userId: meal.userId,
      foodId: meal.foodId,
      name: meal.food.food,
      type: meal.type,
      time: meal.time,
      createdAt: meal.createdAt,
      updatedAt: meal.updatedAt,
    }));
  }

  static async updateMealFood(id, userId, foodId, type, time) {
    try {
      const updatedMealFood = await prisma.mealFood.update({
        where: {
          id: Number(id),
        },
        data: {
          userId: Number(userId),
          foodId: Number(foodId),
          type,
          time,
        },
        include: {
          food: true,
        },
      });

      return {
        id: updatedMealFood.id,
        userId: updatedMealFood.userId,
        foodId: updatedMealFood.foodId,
        name: updatedMealFood.food.food,
        type: updatedMealFood.type,
        time: updatedMealFood.time,
        createdAt: updatedMealFood.createdAt,
        updatedAt: updatedMealFood.updatedAt,
      };
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
