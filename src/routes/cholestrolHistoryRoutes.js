const cholestrolHistoryController = require("../controllers/cholestrolHistoryController");
const authMiddleware = require("../middleware/authMiddleware");

const cholestrolHistoryRoutes = [
  {
    method: "POST",
    path: "/cholestrol",
    handler: UserController.register,
  },
  {
    method: "PUT",
    path: "/cholestrol/{id}",
    handler: UserController.getUsers,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "GET",
    path: "/cholestrol/{id}",
    handler: UserController.getUsers,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "DELETE",
    path: "/cholestrol/{id}",
    handler: UserController.deleteUser,
    options: {
      pre: [authMiddleware],
    },
  },
];

module.exports = cholestrolHistoryRoutes;
