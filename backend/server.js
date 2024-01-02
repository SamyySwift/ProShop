import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Config
dotenv.config();
const PORT = process.env.PORT || 5000;

// App
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

// Routes
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// Custom error middleware
app.use(notFound);
app.use(errorHandler);

// Server
const startServer = () => {
  connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
  });
};

startServer();
