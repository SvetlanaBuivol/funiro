import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/funiro">
      <App />
    </BrowserRouter>
  </StrictMode>
);
