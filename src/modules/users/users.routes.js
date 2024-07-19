import express from "express";

import { signIn, signUp, verifyAccount } from "./users.controller.js";
import { checkEmail } from "../middleware/checkEmail.js";

const userRoute = express.Router();

userRoute.post("/signup", checkEmail, signUp);
userRoute.post("/signin", signIn);
userRoute.get("/verify/:email", verifyAccount);

export default userRoute;

// import { addUser , deleteUser , getAllUsers , updateUser } from "./users.controller.js";

// userRoute.route("/").get(getAllUsers) ;
// userRoute.route("/user").post(addUser) ;
// userRoute.route("/user/:id").delete(deleteUser) ;
// userRoute.route("/user/:id").put(updateUser);
