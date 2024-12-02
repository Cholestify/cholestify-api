const foodService = require("../services/foodService.js");

class foodController {
  static async addFood(request, h) {
    const { number } = request.payload;
    const { userId } = request.params;
    try {
      const dataFood = await foodService.newHistory(
        userId,
        number
      );
      return h
        .response({
          error: false,
          message: "Add food history successfully",
          data: dataFood,
        })
        .code(201);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Add food history failed " + error.message,
        })
        .code(400);
    }
  }

  static async getfood(request, h) {
    const { userId } = request.params;
    try {
      const dataFoods =
        await foodService.findfoodByUserId(userId);
      return h
        .response({
          error: false,
          message: "Get food history successfully",
          data: dataFoods,
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Get food history failed" + error.message,
        })
        .code(400);
    }
  }

  static async updateFood(request, h) {
    const { id } = request.params;
    const { number } = request.payload;
    const update = await foodService.updateHistory(id, number);

    try {
      return h
        .response({
          error: false,
          message: "Update food history successfully",
          data: update,
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: error.message,
        })
        .code(500);
    }
  }

  static async deleteHistory(request, h) {
    const { id } = request.params;
    try {
      await foodService.deleteHistory(id);
      return h
        .response({
          error: false,
          message: "Food history deleted successfully",
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Food history deleted failed" + error.message,
        })
        .code(500);
    }
  }
}

module.exports = foodController;
