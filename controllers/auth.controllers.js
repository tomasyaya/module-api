const User = require("../model/user.model");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { password, email } = req.body;
    const hasMissingCredentials = !password || !email;
    if (hasMissingCredentials) {
      return res.send(400).json({ message: "missing credentials" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.send(400).json({ message: "user alredy exists" });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({ email, hashedPassword });
    return res.send(200).json({ user: email });
  } catch (e) {
    return res.send(400).json({ message: "wrong request" });
  }
};

exports.login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const hasMissingCredentials = !password || !email;
    if (hasMissingCredentials) {
      return res.send(400).json({ message: "missing credentials" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.send(400).json({ message: "user does not exist" });
    }
    const hasCorrectPassword = await bcrypt.compare(
      password,
      user.hashedPassword
    );
    if (!hasCorrectPassword) {
      return res.send(401).json({ message: "unauthorize" });
    }
    return res.send(200).json({ user: user.email });
  } catch (e) {
    return res.send(400).json({ message: "wrong request" });
  }
};
