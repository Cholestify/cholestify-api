const CholesterolHistoryController = require("../controllers/cholestrolHistoryController");
const authMiddleware = require("../middleware/authMiddleware");

const cholestrolHistoryRoutes = [
  {
    method: "POST",
    path: "/cholestrol",
    handler: CholesterolHistoryController.addCholesterol,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "GET",
    path: "/cholestrol",
    handler: CholesterolHistoryController.getCholesterolHistory,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "GET",
    path: "/cholestrol/recentHistory",
    handler: CholesterolHistoryController.getCholesterolRecentHistory,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "PUT",
    path: "/cholestrol/{id}",
    handler: CholesterolHistoryController.updateCholestrolRecentHistory,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    method: "DELETE",
    path: "/cholestrol/delete/{id}",
    handler: CholesterolHistoryController.deleteHistory,
    options: {
      pre: [authMiddleware],
    },
  },
];

module.exports = cholestrolHistoryRoutes;
