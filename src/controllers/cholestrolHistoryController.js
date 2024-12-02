const CholesterolHistoryService = require("../services/cholestrolHistoryService.js");

class CholesterolHistoryController {
  static async addCholesterol(request, h) {
    const { number } = request.payload;
    const { userId } = request.params;
    try {
      const dataCholesterol = await CholesterolHistoryService.newHistory(
        userId,
        number
      );
      return h
        .response({
          error: false,
          message: "Add cholestrol history successfully",
          data: dataCholesterol,
        })
        .code(201);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Add cholestrol history failed " + error.message,
        })
        .code(400);
    }
  }

  static async getCholesterolHistory(request, h) {
    const { userId } = request.params;
    try {
      const dataCholesterols =
        await CholesterolHistoryService.findCholesterolHistoryByUserId(userId);
      return h
        .response({
          error: false,
          message: "Get cholestrol history successfully",
          data: dataCholesterols,
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Get cholestrol history failed" + error.message,
        })
        .code(400);
    }
  }

  static async getCholesterolRecentHistory(request, h) {
    const { userId } = request.params;
    try {
      const dataCholesterols =
        await CholesterolHistoryService.findCholesterolRecentHistoryByUserId(
          userId
        );
      return h
        .response({
          error: false,
          message: "Get cholestrol history successfully",
          data: dataCholesterols,
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Get cholestrol history failed" + error.message,
        })
        .code(400);
    }
  }

  static async updateCholestrolRecentHistory(request, h) {
    const { userId } = request.params;
    const { number } = request.payload;
    const update = await CholesterolHistoryService.updateRecentHistory(
      userId,
      number
    );

    try {
      return h
        .response({
          error: false,
          message: "Update cholestrol history successfully",
          data: update,
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: error.message,
        })
        .code(500);
    }
  }

  static async deleteHistory(request, h) {
    const { id } = request.params;
    try {
      await CholesterolHistoryService.deleteHistory(id);
      return h
        .response({
          error: false,
          message: "Cholesterol history deleted successfully",
        })
        .code(200);
    } catch (error) {
      return h
        .response({
          error: true,
          message: "Cholesterol history deleted failed" + error.message,
        })
        .code(500);
    }
  }
}

module.exports = CholesterolHistoryController;
