import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout, Notes } from "./components/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  </BrowserRouter>,
);
