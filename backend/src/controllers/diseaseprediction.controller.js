import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import axios from "axios";

const predictDisease = asyncHandler(async (req, res) => {
  try {
    const { Symptom1, Symptom2, Symptom3, Symptom4, Symptom5 } = req.body;

    const response = await axios.post("http://127.0.0.1:5000/diagnosis", {
      Symptom1,
      Symptom2,
      Symptom3,
      Symptom4,
      Symptom5,
    });

    res.status(200).json(new ApiResponse(response.data));
  } catch (error) {
    res.status(500).json(new ApiError({ error: error.message }));
  }
});

export { predictDisease };
