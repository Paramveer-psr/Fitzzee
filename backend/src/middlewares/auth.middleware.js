import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const verifyJWT = asyncHandler((req, _, next) => {
  const token =
    req.cookies?.accessToken ||
    req.headers.authorization?.replace("Bearer ", "").trim();

  if (!token) {
    throw new ApiError(400, "No Token");
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  if (!decodedToken) {
    throw new ApiError(400, "Unauthorized Request or Token Expired");
  }

  req.user = decodedToken;
  next();
});
