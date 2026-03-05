import { Router } from "express";
import {
  addNote,
  delNote,
  editNote,
  fetchAllNotes,
} from "../controllers/notes.controllers.js";

const router = Router();

router.route("/add").post(addNote);
router.route("/del/:id").delete(delNote);
router.route("/edit/:id").patch(editNote);
router.route("/fetchAll").get(fetchAllNotes);

export default router;
