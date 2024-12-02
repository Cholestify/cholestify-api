const foodService = require("../services/foodService.js");

class foodController {
  static async addFood(request, h) {
    const { 
        food, 
        caloricValue, 
        fat, 
        saturatedFats,
        monounsaturatedFats,
        polyunsaturatedFats,
        carbohydrates,
        sugars,
        protein,
        dietaryFiber,
        cholesterol,
        sodium, 
        water,
        vitaminA,
        vitaminB1,
        vitaminB11,
        vitaminB12,
        vitaminB2,
        vitaminB3,
        vitaminB5,
        vitaminB6,
        vitaminC,
        vitaminD,
        vitaminE,
        vitaminK,
        calcium,
        copper,
        iron,
        magnesium,
        manganese,
        phosphorus,
        potassium,
        selenium,
        zinc,
        nutritionDensity
     } = request.payload;
    try {
      const dataFood = await foodService.newFood(
        food,
        caloricValue,
        fat,
        saturatedFats,
        monounsaturatedFats,
        polyunsaturatedFats,
        carbohydrates,
        sugars,
        protein,
        dietaryFiber,
        cholesterol,
        sodium, 
        water,
        vitaminA,
        vitaminB1,
        vitaminB11,
        vitaminB12,
        vitaminB2,
        vitaminB3,
        vitaminB5,
        vitaminB6,
        vitaminC,
        vitaminD,
        vitaminE,
        vitaminK,
        calcium,
        copper,
        iron,
        magnesium,
        manganese,
        phosphorus,
        potassium,
        selenium,
        zinc,
        nutritionDensity
      );
      return h
        .response({
          error: false,
          message: "Add Food successfully",
          data: dataFood,
        })
        .code(201);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Add Food failed " + error.message,
        })
        .code(400);
    }
  }

  static async getFood(request, h) {
    try {
      const dataFoods =
        await foodService.getAllFoods();
      return h
        .response({
          error: false,
          message: "Get Food successfully",
          data: dataFoods,
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Get Food failed" + error.message,
        })
        .code(400);
    }
  }

  static async updateFood(request, h) {
    const { id } = request.params;
    const { food,
            caloricValue,
            fat,
            saturatedFats,
            monounsaturatedFats,
            polyunsaturatedFats,
            carbohydrates,
            sugars,
            protein,
            dietaryFiber,
            cholesterol,
            sodium, 
            water,
            vitaminA,
            vitaminB1,
            vitaminB11,
            vitaminB12,
            vitaminB2,
            vitaminB3,
            vitaminB5,
            vitaminB6,
            vitaminC,
            vitaminD,
            vitaminE,
            vitaminK,
            calcium,
            copper,
            iron,
            magnesium,
            manganese,
            phosphorus,
            potassium,
            selenium,
            zinc,
            nutritionDensity
          } = request.payload;
    const update = await foodService.updateFood(id,
        food,
        caloricValue,
        fat,
        saturatedFats,
        monounsaturatedFats,
        polyunsaturatedFats,
        carbohydrates,
        sugars,
        protein,
        dietaryFiber,
        cholesterol,
        sodium, 
        water,
        vitaminA,
        vitaminB1,
        vitaminB11,
        vitaminB12,
        vitaminB2,
        vitaminB3,
        vitaminB5,
        vitaminB6,
        vitaminC,
        vitaminD,
        vitaminE,
        vitaminK,
        calcium,
        copper,
        iron,
        magnesium,
        manganese,
        phosphorus,
        potassium,
        selenium,
        zinc,
        nutritionDensity
    );

    try {
      return h
        .response({
          error: false,
          message: "Update food successfully",
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
      await foodService.deleteFood(id);
      return h
        .response({
          error: false,
          message: "Food deleted successfully",
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Food deleted failed" + error.message,
        })
        .code(500);
    }
  }
}

module.exports = foodController;
