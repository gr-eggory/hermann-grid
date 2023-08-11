import "./style.css";

import { setupCanvasSizing } from "./logic/canvasSizing";

const main = () => {
  const canvas = document.getElementById("hermann-grid") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  setupCanvasSizing(canvas);
};

main();
