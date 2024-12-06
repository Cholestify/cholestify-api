const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

class UserService {
  static async createUser (name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: { name : name,  password: hashedPassword, email: email },
    });
  }

  static async findUserByEmail(email) {
    return await prisma.user.findUnique({ where: { email } });
  }

  static async findUserById(id) {
    return await prisma.user.findUnique({ where: { id: Number(id) } });
  }

  static async getAllUsers() {
    return await prisma.user.findMany();
  }

  static async deleteUser (id) {
    return await prisma.user.delete({ where: { id: Number(id) } });
  }

  static async updateUser (id, name, email, birthdate, gender, weight, height, activity) {
    return await prisma.user.update({
      where: { id: Number(id) },
      data: { 
        name: name, 
        email: email, 
        birthdate: birthdate,
        gender: gender, 
        weight: weight, 
        height: height,
        activity: activity
      },
    });
  }

}

module.exports = UserService;