import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requirded: true,
      unique: true,
    },
    email: {
      type: String,
      requirded: true,
      unique: true,
    },
    password: {
      type: String,
      requirded: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
