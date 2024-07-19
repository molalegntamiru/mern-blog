import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  )
    return res.json({ msg: "please fill required fields" });
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
    return res.json({ msg: "something went wrong, try again later", error });
  }
};
export { signup };
