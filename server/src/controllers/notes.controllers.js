import Notes from "../models/notes.models.js";
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
    return res
      .status(200)
      .json(new ApiResponse(200, note, "Note added successfully :D"));
  } catch (error) {
    throw new ApiError(401, "Bad request");
  }
});

const delNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const note = await Notes.findByIdAndDelete(id);
  return res
    .status(200)
    .json(new ApiResponse(200, note, "Note deleted successfully XD"));
});

const editNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!title && !description) {
    throw new ApiError(400, "Atleast one field is required to be filled +_-");
  }

  const note = await Notes.findByIdAndUpdate(
    id,
    {
      $set: {
        title,
        description,
      },
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!note) throw new ApiError(404, "Note Not Found");
  return res.json(new ApiResponse(200, note, "Updated Successfully "));
});

const fetchAllNotes = asyncHandler(async (req, res) => {
  const notes = await Notes.find().sort({ updatedAt: -1 });
  // if (!notes) {
  //   throw new ApiError(
  //     404,
  //     "No Notes found... Add one real quick using the add option >_<",
  //   );
  // }

  return res
    .status(200)
    .json(new ApiResponse(200, notes, "Notes fetched successfully !!"));
});

export { addNote, delNote, editNote, fetchAllNotes };
