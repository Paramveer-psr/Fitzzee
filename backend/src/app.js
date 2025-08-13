import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Welcome to Fitzzee!");
});

import userRouter from "./routes/user.routes.js";
app.use("/api/auth", userRouter);

import featureRouter from "./routes/features.routes.js";
app.use("/api/features", featureRouter);

import reviewRouter from "./routes/review.routes.js";
app.use("/api/reviews", reviewRouter);

import { errorHandler } from "./middlewares/errorHandler.middleware.js";
app.use(errorHandler);

export { app };
