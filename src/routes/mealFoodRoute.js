const mealFoodController = require("../controllers/mealFoodController");
const authMiddleware = require("../middleware/authMiddleware");

const mealFoodRoutes = [
  {
    method: "POST",
    path: "/mealFood",
    handler: mealFoodController.addMealFood,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "GET",
    path: "/mealFood",
    handler: mealFoodController.getMealFood,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "GET",
    path: "/mealFood/recentHistory",
    handler: mealFoodController.getMealFoodThisDay,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "GET",
    path: "/mealFood/recentNutritionHistory",
    handler: mealFoodController.getMealFoodNutritionToday,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "PUT",
    path: "/mealFood/{id}",
    handler: mealFoodController.updateMealFood,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "DELETE",
    path: "/mealFood/delete/{id}",
    handler: mealFoodController.deleteHistoryMealFood,
    options: {
      pre: [authMiddleware],
    },
  },
];

module.exports = mealFoodRoutes;
