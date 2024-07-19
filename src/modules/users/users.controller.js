import express from "express";
import userModel from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import sendEmail from "../../utility/sendEmail.js";
const userRoute = express.Router();

const signUp = async (req, res) => {
  await userModel.insertMany(req.body);
  sendEmail(req.body.email);
  res.json({ message: "added" });
};

const signIn = async (req, res) => {
  let foundedUser = await userModel.findOne({ email: req.body.email });

  if (
    !foundedUser ||
    !bcrypt.compareSync(req.body.password, foundedUser.password)
  )
    return res.status(404).json({ message: "Email or Password invalid" });

  if (foundedUser.isConfirmed == false)
    return res
      .status(401)
      .json({ message: "You Sould Confirm Your Email First" });
  res.ststus(200).json({ message: "welcome" });

  const OTPCode = generateOTP();
  const OTPExpire = new Date(Date.now() + 5 * 60 * 1000);

  if (foundedUser.OTPCode == OTPCode && foundedUser.OTPExpire == OTPExpire) {
    foundedUser.isConfirmed = true;
  } else {
    foundedUser.isConfirmed = false;
  }
  await foundedUser.save();
};

const verifyAccount = async (req, res) => {
  console.log(req.params.email);
  let updateUser = await userModel.findOneAndUpdate(
    { email: req.params.email },
    { isConfirmed: true },
    { new: true }
  );
  res.json({ message: "Welcome" });
};
export { signUp, signIn, verifyAccount };
