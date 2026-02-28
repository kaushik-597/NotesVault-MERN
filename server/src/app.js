import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoute from "./routes/notes.routes.js";

const app = express();
dotenv.config("./.env");

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));

app.use("/api/v1/notes", notesRoute);

export { app };
