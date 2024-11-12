const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

class UserService {
  static async createUser (username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: { username, password: hashedPassword },
    });
  }

  static async findUserByUsername(username) {
    return await prisma.user.findUnique({ where: { username } });
  }

  static async getAllUsers() {
    return await prisma.user.findMany();
  }

  static async deleteUser (id) {
    return await prisma.user.delete({ where: { id: Number(id) } });
  }
}

module.exports = UserService;