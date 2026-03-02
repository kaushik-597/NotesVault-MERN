import { Notes } from "../models/notes.models.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const addNote = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "Title and Description are required :)");
  }

  const note = await Notes.create({ title, description });
  try {
    return res.json(new ApiResponse(200, note, "Note added successfully :D"));
  } catch (error) {
    throw new ApiError(401, "Bad request");
  }
});

const delNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const note = await Notes.findByIdAndDelete(id);
  return res.json(new ApiResponse(200, note, "Note deleted successfully XD"));
});

export { addNote, delNote };
