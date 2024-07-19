import express from "express";
import { addNote, getAllNotes } from "./notes.controller";

const noteRoute = express.Router();

noteRoute.post("/note", addNote);
noteRoute.get("/note", getAllNotes);
export default noteRoute;
