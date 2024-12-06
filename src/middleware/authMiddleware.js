const jwtUtils = require("../utils/jwtUtils");

const authMiddleware = async (request, h) => {
  const token = request.headers.authorization?.split(" ")[1];
  if (!token) {
    return h.response({ error: "Unauthorized" }).code(401);
  }

  try {
    const decoded = jwtUtils.verifyToken(token);
    request.user = decoded;
    
    return h.continue;
  } catch (error) {
    return h.response({ error: "Invalid token" }).code(403);
  }
};

module.exports = authMiddleware;
