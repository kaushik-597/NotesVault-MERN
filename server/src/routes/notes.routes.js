import { Router } from "express";
import { addNote } from "../controllers/notes.controllers.js";

const router = Router();

router.route("/add").post(addNote);

export default router;
