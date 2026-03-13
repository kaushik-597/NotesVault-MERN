import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";

const register = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if ([fullName, email, password].some((field) => !field)) {
    throw new ApiError(400, "All fields are required +_-");
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  const registeredUser = User.findById(user._id).select("-password");

  // if (!registeredUser)
  //   throw new ApiError(500, "Something went wrong while registering the user");

  res
    .status(201)
    .json(
      new ApiResponse(201, registeredUser, "User registered successfully :)"),
    );
});

export { register };
