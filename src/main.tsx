import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
