import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { preload } from "react-dom";
import "./assets/styles/index.css";
import App from "./App.tsx";
import comfortaaFont from "@/assets/fonts/Comfortaa.woff2?url";
import nunitoSansFont from "@/assets/fonts/NunitoSans.woff2?url";

import starEmpty from "@/assets/images/stars/star-empty.png";
import starFilled from "@/assets/images/stars/star-filled.png";
import bg1 from "@/assets/images/bgs/1.png";
import bg2 from "@/assets/images/bgs/2.png";
import bg3 from "@/assets/images/bgs/3.png";
import bg4 from "@/assets/images/bgs/4.png";
import bg5 from "@/assets/images/bgs/5.png";

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

const images = [starEmpty, starFilled, bg1, bg2, bg3, bg4, bg5];

images.forEach((src) => {
  preload(src, {
    as: "image",
    type: "image/png",
  });
});


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
