import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`database connected`);
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log(`server running at http://localhost:${3000}`);
});

app.use("/api/users/", userRoutes);
app.use("/api/auths/", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
