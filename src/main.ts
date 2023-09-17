import "./style.css";

import { updateHermanGrid, setupHermanGrid } from "./logic/canvas";

const main = () => {
  const squareDimensionInput = document.getElementById(
    "square-dimension"
  ) as HTMLInputElement;
  const gapDimensionInput = document.getElementById(
    "gap-size"
  ) as HTMLInputElement;

  const canvas = document.getElementById("hermann-grid") as HTMLCanvasElement;

  const config = {
    squareDimension: Number(squareDimensionInput.value),
    gap: Number(gapDimensionInput.value),
  };

  setupHermanGrid(canvas);

  squareDimensionInput.addEventListener("input", (event) => {
    updateHermanGrid(event, canvas, config);
  });

  gapDimensionInput.addEventListener("input", (event) => {
    updateHermanGrid(event, canvas, config);
  });
};

main();
