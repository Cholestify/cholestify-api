// const mealFoodService = require("../services/mealFoodService");

// class mealFoodController {
//   static async addMealFood(request, h) {
//     const { id } = request.payload;
//     try {
//       const dataFood = await mealFoodService.newFood(id);
//       return h
//         .response({
//           error: false,
//           message: "Add Meal Food successfully",
//           data: dataFood,
//         })
//         .code(201);
//     } catch (error) {
//       return h
//         .response({
//           error: true,
//           message: "Add Food failed " + error.message,
//         })
//         .code(400);
//     }
//   }

//   static async getMealFood(request, h) {
//     try {
//       const dataFoods = await mealFoodService.getAllFoods();
//       return h
//         .response({
//           error: false,
//           message: "Get Food successfully",
//           data: dataFoods,
//         })
//         .code(200);
//     } catch (error) {
//       return h
//         .response({
//           error: true,
//           message: "Get Food failed" + error.message,
//         })
//         .code(400);
//     }
//   }

//   static async updateMealFood(request, h) {
//     const { id } = request.params;
//     const { nutritionDensity } = request.payload;
//     const update = await mealFoodService.updateFood(id, nutritionDensity);

//     try {
//       return h
//         .response({
//           error: false,
//           message: "Update food successfully",
//           data: update,
//         })
//         .code(200);
//     } catch (error) {
//       return h
//         .response({
//           error: true,
//           message: error.message,
//         })
//         .code(500);
//     }
//   }

//   static async deleteHistoryMealFood(request, h) {
//     const { id } = request.params;
//     try {
//       await mealFoodService.deleteFood(id);
//       return h
//         .response({
//           error: false,
//           message: "Food deleted successfully",
//         })
//         .code(200);
//     } catch (error) {
//       return h
//         .response({
//           error: true,
//           message: "Food deleted failed" + error.message,
//         })
//         .code(500);
//     }
//   }
// }

// module.exports = mealFoodController;
