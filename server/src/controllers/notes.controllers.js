import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const addNote = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "Title and Description are required :)");
  }

  try {
    return res.json(
      new ApiResponse(
        200,
        { title, description },
        "Note added successfully :D",
      ),
    );
  } catch (error) {
    throw new ApiError(401, "Bad request");
  }
});

export { addNote };
