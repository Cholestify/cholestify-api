const foodController = require("../controllers/cholestrolHistoryController");
const authMiddleware = require("../middleware/authMiddleware");

const foodRoutes = [
  {
    method: "POST",
    path: "/food/{userId}",
    handler: foodController.addFood,
  },
  {
    method: "GET",
    path: "/food/{userId}",
    handler: foodController.getCholesterolHistory,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "PUT",
    path: "/food/{id}",
    handler: foodController.updateCholestrolHistory,
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
