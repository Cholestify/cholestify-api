const UserService = require("../services/userService");
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
    return h
      .response({
        error: false,
        message: "Profile fetched successfully",
        data: idUser,
      })
      .code(200);
    // const users = await UserService.getAllUsers();
    // return h
    //   .response({
    //     error: false,
    //     message: "Profile fetched successfully",
    //     data: users,
    //   })
    //   .code(200);
  }

  static async updateProfile(request, h) {
    const dataUser = request.user;
    const { name, email, birthdate, gender, weight, height } = request.payload;
    console.log(dataUser);
    console.log(name, email, birthdate, gender, weight, height);

    const user = await UserService.updateUser(
      dataUser.id,
      name,
      email,
      birthdate,
      gender,
      weight,
      height
    );

    return h
      .response({
        error: false,
        message: "Profile updated successfully",
        data: user,
      })
      .code(200);
  }

  // static async deleteUser(request, h) {
  //   const { id } = request.params;
  //   console.log(id);

  //   await UserService.deleteUser(id);
  //   return h
  //     .response({
  //       error: false,
  //       message: "User deleted successfully",
  //     })
  //     .code(204);
  // }
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
