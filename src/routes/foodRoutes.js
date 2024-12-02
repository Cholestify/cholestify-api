const foodController = require("../controllers/foodController");
const authMiddleware = require("../middleware/authMiddleware");

const foodRoutes = [
  {
    method: "POST",
    path: "/food",
    handler: foodController.addFood,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "GET",
    path: "/food",
    handler: foodController.getFood,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "PUT",
    path: "/food/{id}",
    handler: foodController.updateFood,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "DELETE",
    path: "/food/delete/{id}",
    handler: foodController.deleteHistory,
    options: {
      pre: [authMiddleware],
    },
  },
];

module.exports = foodRoutes;
