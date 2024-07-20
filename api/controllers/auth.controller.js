import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import errorHandler from "../utils/error.js";
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  )
    next(errorHandler(400, "All fields are required"));
  if (password.length < 8)
    return res.json({ msg: "password must be greater than 8 character" });

  try {
    const hashPass = await bcryptjs.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashPass,
    });
    await newUser.save();
    return res.json({ msg: "user registred successfully" });
  } catch (error) {
    next(error);
  }
};
export { signup };
