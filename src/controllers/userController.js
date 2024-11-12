const UserService = require('../services/userService');
const jwtUtils = require('../utils/jwtUtils');
const bcrypt = require('bcryptjs');

class UserController {
  static async register(request, h) {
    const { name, email, password } = request.payload;
    try {
      const user = await UserService.createUser (name, email, password);
      return h.response(user).code(201);
    } catch (error) {
      return h.response({ error: 'User  creation failed' }).code(400);
    }
  }

  static async login(request, h) {
    const { email, password } = request.payload;
    const user = await UserService.findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwtUtils.generateToken(user.id, user.email);
      return h.response({ token }).code(200);
    } else {
        return h.response({ error: 'Invalid email or password' }).code(403);
    }
  }

  static async getUsers(request, h) {
    const users = await UserService.getAllUsers();
    return h.response(users).code(200);
  }

  static async deleteUser (request, h) {
    const { id } = request.params;
    await UserService.deleteUser (id);
    return h.response().code(204);
  }
}

module.exports = UserController;