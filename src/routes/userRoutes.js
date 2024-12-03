const UserController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const userRoutes = [
  {
    method: "POST",
    path: "/register",
    handler: UserController.register,
  },
  {
    method: "POST",
    path: "/login",
    handler: UserController.login,
  },
  {
    method: "GET",
    path: "/users",
    handler: UserController.getUsers,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "PUT",
    path: "/users/profile",
    handler: UserController.updateProfile,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "DELETE",
    path: "/users/delete/{id}",
    handler: UserController.deleteUser,
    options: {
      pre: [authMiddleware],
    },
  },
];

module.exports = userRoutes;
