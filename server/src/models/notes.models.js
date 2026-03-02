import mongoose from "mongoose";

const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required XO"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Description is required XO"],
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
  },
  {
    timestamps: true,
  },
);

export const Notes = mongoose.model("Notes", notesSchema);
