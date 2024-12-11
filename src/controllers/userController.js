const UserService = require("../services/userService");
const mealFoodService = require("../services/mealFoodService");
const jwtUtils = require("../utils/jwtUtils");
const bcrypt = require("bcryptjs");

class UserController {
  static async register(request, h) {
    const { name, email, password } = request.payload;
    try {
      const user = await UserService.createUser(name, email, password);
      return h
        .response({
          error: false,
          message: "Register successfully",
          data: user,
        })
        .code(201);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Register failed",
        })
        .code(400);
    }
  }

  static async login(request, h) {
    const { email, password } = request.payload;
    const user = await UserService.findUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwtUtils.generateToken(user.id, user.email);
      return h
        .response({
          error: false,
          message: "Login successfully",
          data: {
            token: token,
          },
        })
        .code(200);
    } else {
      return h
        .response({
          error: true,
          message: "Invalid email or password",
        })
        .code(403);
    }
  }

  static async getUsers(request, h) {
    const idUser = request.user;
    const users = await UserService.findUserById(idUser.id);
    return h
      .response({
        error: false,
        message: "Profile fetched successfully",
        data: users,
      })
      .code(200);
  }

  static async dailyNutrition(request, h) {
    const idUser = request.user.id;
    const user = await UserService.findUserById(idUser);
    if (!user) {
      return h
        .response({
          error: true,
          message: "User not found",
        })
        .code(404);
    }
    if (
      !user.birth &&
      !user.gender &&
      !user.weight &&
      !user.height &&
      !user.activityLevel
    ) {
      return h
        .response({
          error: true,
          message: "User data is not complete",
        })
        .code(400);
    }
    var age = new Date().getFullYear() - new Date(user.birthdate).getFullYear();
    var bmr = 0;
    if (user.gender == "male") {
      bmr = user.weight * 10 + user.height * 6.25 - age * 5 + 5;
    } else {
      bmr = user.weight * 10 + user.height * 6.25 - age * 5 - 161;
    }
    var totalCalories = bmr;
    if (user.activity == "sedentary") {
      totalCalories *= 1.2;
    } else if (user.activity == "light") {
      totalCalories *= 1.375;
    } else if (user.activity == "moderate") {
      totalCalories *= 1.55;
    } else if (user.activity == "active") {
      totalCalories *= 1.725;
    } else if (user.activity == "very_active") {
      totalCalories *= 1.9;
    } else {
      return h
        .response({
          error: true,
          message: "Activity Level not found",
        })
        .code(404);
    }
    const dataFoods = await mealFoodService.getAllMealFoodsThisDay(idUser);
    
    dataFoods.forEach((food) => {
      totalCalories -= food.calories;
      totalProtein -= food.protein;
      totalFat -= food.fat;
      totalCarbohydrate -= food.carbohydrate;
    });
    var dataResponse = {
      error: false,
      message: "Daily Nutrition fetched successfully",
      data: {
        totalCalories: totalCalories,
        totalProtein: totalCalories * 0.15,
        totalFat: totalCalories * 0.25,
        totalCarbohydrate: totalCalories * 0.6,
      },
    };
    return h.response(dataResponse).code(200);
  }

  static async updateProfile(request, h) {
    const idUser = request.user.id;

    const { name, email, birthdate, gender, weight, height, activity } =
      request.payload;
    const user = await UserService.updateUser(
      idUser,
      name,
      email,
      birthdate,
      gender,
      weight,
      height,
      activity
    );
    return h
      .response({
        error: false,
        message: "Profile updated successfully",
        data: user,
      })
      .code(200);
  }

  static async deleteUser(request, h) {
    const { id } = request.params;

    try {
      if (!id) {
        return h.response({ error: true, message: "ID is required" }).code(400);
      }

      await UserService.deleteUser(id);

      return h
        .response({
          error: false,
          message: "User deleted successfully",
        })
        .code(200);
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error.message);

      return h
        .response({
          error: true,
          message: `Failed to delete user: ${error.message}`,
        })
        .code(500);
    }
  }
}

module.exports = UserController;
