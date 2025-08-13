import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if ([name, email, password].some((val) => !val)) {
    throw new ApiError(400, "All fields are required");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await User.create({
    email,
    name,
    password: hashedPassword,
  });

  const user = await User.findById(createdUser._id).select("-password");

  return res.status(201).json(new ApiResponse(201, user, "User Created"));
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((val) => !val)) {
    throw new ApiError(400, "All fields are required");
  }
  const user = await User.findOne({ email });
  const check = user.isPasswordCorrect(password);

  if (!check) {
    throw new ApiError(400, "Incorrect Password");
  }

  const accessToken = await user.generateAccessToken();
  const loggedInUser = await User.findById(user._id).select("-password");
  const options = {
    httpOnly: true,
    sameSite: "Strict",
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken },
        "User Logged In Successfully"
      )
    );
});

export { register, login };
