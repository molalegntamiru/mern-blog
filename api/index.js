import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
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

app.listen(3000, () => {
  console.log(`server running at http://localhost:${3000}`);
});
