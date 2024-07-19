import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import userModel from "./database/models/user.model.js";

import userRoute from "./src/modules/users/users.routes.js";
import noteRoute from "./src/modules/users/users.routes.js";
import sendEmail from "./src/utility/sendEmail.js";

const app = express();
app.use(express.json());
const port = 3000;

dbConnection;

app.use(userRoute);
app.use(noteRoute);

sendEmail;
app.listen(port, () => console.log(`listenoong on port ${port}`));
