import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addReview,
  deleteReview,
  viewReview,
} from "../controllers/review.controller.js";
const router = Router();

router.get("/", viewReview);
router.post("/add-review", verifyJWT, addReview);
router.delete("/delete-review/:id", verifyJWT, deleteReview);

export default router;
