import mongoose from "mongoose";
import { Review } from "../models/review.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler.js";

const addReview = asyncHandler(async (req, res) => {
  const { rating, feedback } = req.body;
  const userId = req.user._id;
  if ([rating, feedback].some((val) => !val)) {
    throw new ApiError(400, "all fields are required");
  }

  const review = await Review.create({
    rating,
    feedback,
    user: new mongoose.Types.ObjectId(userId),
  });

  return res.status(200).json(new ApiResponse(200, review, "Review Created"));
});

const deleteReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const reviewToDelete = await Review.findOneAndDelete({
    _id: new mongoose.Types.ObjectId(id),
    user: new mongoose.Types.ObjectId(userId),
  });

  return res
    .status(200)
    .json(new ApiResponse(200, reviewToDelete, "Review Deleted"));
});

const viewReview = asyncHandler(async (req, res) => {
  const reviews = await Review.find().populate("user", "name email");
  return res
    .status(200)
    .json(new ApiResponse(200, reviews, "Reviews Fetched Successfully"));
});

export { addReview, deleteReview, viewReview };
