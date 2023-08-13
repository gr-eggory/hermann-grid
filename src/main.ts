import "./style.css";

import { setupHermanGrid } from "./logic/canvas";

const main = () => {
  const canvas = document.getElementById("hermann-grid") as HTMLCanvasElement;
  setupHermanGrid(canvas);
};

main();
