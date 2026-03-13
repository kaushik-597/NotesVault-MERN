import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";

const register = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  // if ([fullName, email, password]?.forEach((a) => !a)) {
  // }

  if (!fullName && !email && !password) {
    throw new ApiError();
  }

  const user = User.create();

  res
    .status(200)
    .json(
      new ApiResponse(200, { fullName, email, password }, "Data coming XD"),
    );
});

export { register };
