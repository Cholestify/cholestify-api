const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

class UserService {
  static async createUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: { name: name, password: hashedPassword, email: email },
    });
  }

  static async findUserByEmail(email) {
    return await prisma.user.findUnique({ where: { email } });
  }

  static async getAllUsers() {
    return await prisma.user.findMany();
  }

  // static async deleteUser(id) {
  //   return await prisma.user.delete({ where: { id: Number(id) } });
  // }
  static async deleteUser(id) {
    try {
      return await prisma.user.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }

  static async updateUser(id, name, email, birthdate, gender, weight, height) {
    // return await prisma.user.update({
    //   where: { id: Number(id) },
    //   data: {
    //     name: name,
    //     email: email,
    //     birthdate: birthdate,
    //     gender: gender,
    //     weight: weight,
    //     height: height
    //   },
    // });
    console.log(id, name, email, birthdate, gender, weight, height);
    try {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: {
          name: name,
          email: email,
          birthdate: birthdate ? new Date(birthdate) : null,
          gender: gender,
          weight: weight || null,
          height: height || null,
        },
      });

      return updatedUser;
    } catch (error) {
      console.error("Error updating user:", error.message);
      throw error;
    }
  }
}

module.exports = UserService;
