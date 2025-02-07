import express from "express";
import { predictDisease } from "../controllers/diseaseprediction.controller.js";

const router = express.Router();

router.post("/disease-prediction", predictDisease);

export default router;
