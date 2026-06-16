import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { preload } from "react-dom";
import "./assets/styles/index.css";
import App from "./App.tsx";
import comfortaaFont from "@/assets/fonts/Comfortaa.woff2?url";
import nunitoSansFont from "@/assets/fonts/NunitoSans.woff2?url";

preload(comfortaaFont, {
  as: "font",
  type: "font/woff2",
  crossOrigin: "anonymous",
});

preload(nunitoSansFont, {
  as: "font",
  type: "font/woff2",
  crossOrigin: "anonymous",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
