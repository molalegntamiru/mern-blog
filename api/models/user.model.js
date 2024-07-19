import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requirded: tru,
      unique: true,
    },
    email: {
      type: String,
      requirded: tru,
      unique: true,
    },
    password: {
      type: String,
      requirded: tru,
    },
  },
  { timeStamp: true }
);
const User = mongoose.model("User", userSchema);
export default User;
