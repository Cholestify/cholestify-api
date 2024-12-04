const mealFoodService = require("../services/mealFoodService");

class mealFoodController {
  static async addMealFood(request, h) {
    const userId = request.user.id;
    const { foodId, type, time } = request.payload;

    // Validasi request payload
    if (!foodId || !type || !time) {
      return h
        .response({
          error: true,
          message: "Missing required fields: foodId, type, or time",
        })
        .code(400); // Bad Request
    }

    // Validasi tipe meal (type)
    const validMealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];
    if (!validMealTypes.includes(type)) {
      return h
        .response({
          error: true,
          message:
            "Invalid meal type. Valid types are: Breakfast, Lunch, Dinner, Snack.",
        })
        .code(400); // Bad Request
    }

    // Validasi format waktu (time)
    const dateTime = new Date(time);
    if (isNaN(dateTime.getTime())) {
      return h
        .response({
          error: true,
          message: "Invalid time format. Ensure it is a valid DateTime.",
        })
        .code(400); // Bad Request
    }

    try {
      const dataFood = await mealFoodService.newMealFood(
        userId,
        foodId,
        type,
        time
      );
      return h
        .response({
          error: false,
          message: "Add Meal Food successfully",
          data: dataFood,
        })
        .code(201);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Add Meal Food failed " + error.message,
        })
        .code(400);
    }
  }

  static async getMealFood(request, h) {
    const userId = request.user.id;
    try {
      const dataFoods = await mealFoodService.getAllMealFoods(userId);
      return h
        .response({
          error: false,
          message: "Get Meal Food successfully",
          data: dataFoods,
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Get Meal Food failed" + error.message,
        })
        .code(400);
    }
  }

  static async getMealFoodThisDay(request, h) {
    const userId = request.user.id;
    try {
      const dataFoods = await mealFoodService.getAllMealFoodsThisDay(userId);
      return h
        .response({
          error: false,
          message: "Get Meal Food successfully",
          data: dataFoods,
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Get Meal Food failed" + error.message,
        })
        .code(400);
    }
  }

  static async updateMealFood(request, h) {
    const userId = request.user.id;
    const { id } = request.params;
    const { foodId, type, time } = request.payload;

    try {
      if (!id || !foodId || !type || !time) {
        return h
          .response({
            error: true,
            message: "All fields (id, foodId, type, time) are required",
          })
          .code(400);
      }
      const dateTime = new Date(time);
      if (isNaN(dateTime.getTime())) {
        return h
          .response({
            error: true,
            message: "Invalid time format. Ensure it is a valid DateTime.",
          })
          .code(400); // Bad Request
      }
      const update = await mealFoodService.updateMealFood(
        id,
        userId,
        foodId,
        type,
        time
      );

      return h
        .response({
          error: false,
          message: "Update meal food successfully",
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

  static async deleteHistoryMealFood(request, h) {
    const { id } = request.params;
    try {
      await mealFoodService.deleteMealFood(id);
      return h
        .response({
          error: false,
          message: "Meal food deleted successfully",
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Meal food deleted failed" + error.message,
        })
        .code(500);
    }
  }
}

module.exports = mealFoodController;
