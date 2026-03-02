import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`,
    );
    console.log(
      "MongoDB connected Successfully :D",
      connectionInstance.connection.host,
    );
  } catch (error) {
    console.log(error, "MongoDB connection error XO");
  }
};

export { connectDB };
