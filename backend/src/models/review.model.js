import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Review = mongoose.model("Review", reviewSchema);
