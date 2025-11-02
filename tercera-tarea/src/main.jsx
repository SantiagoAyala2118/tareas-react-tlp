import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { MultipleCustomHooks } from "./pages/MultipleCustomHooks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MultipleCustomHooks />
  </StrictMode>
);
