import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    age: Number,
    isConfirmed: {
      type: Boolean,
      default: false,
    },
    OTPCode: String,
    OTPExpire: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
