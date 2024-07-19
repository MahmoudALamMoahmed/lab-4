import mongoose from "mongoose";

export const dbConnection = mongoose
  .connect("mongodb://localhost:3000/node")
  .then(() => console.log("DB Connected"))
  .catch(() => console.log("error"));
