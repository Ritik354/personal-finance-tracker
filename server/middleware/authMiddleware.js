const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

    // Debug logging
    console.log("Decoded JWT token:", decoded);

    req.user = {
      id: decoded.id || decoded._id || decoded.userId,
      userId: decoded.userId || decoded.id || decoded._id,
      ...decoded,
    };

    console.log("User object set:", req.user);
    next();
  } catch (err) {
    console.error("JWT verification error:", err);
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = requireAuth;
