import { Router } from "express";
import { addNote, delNote } from "../controllers/notes.controllers.js";

const router = Router();

router.route("/add").post(addNote);
router.route("/del").delete(delNote);

export default router;
