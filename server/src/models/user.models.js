import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      maxlength: [30, "Full Name can't be longer than this..."],
      required: [true, "Full Name cannot be empty"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email cannot be empty"],
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Password cannot be empty"],
      minlength: [6, "Password must be atleast 6 characters"],
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);
