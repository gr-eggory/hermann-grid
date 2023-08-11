import "./style.css";

import { setupCanvasSizing } from "./logic/canvasSizing";

const main = () => {
  const canvas = document.getElementById("hermann-grid") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  setupCanvasSizing(canvas);

  const squareDimension = 50;
  const gap = 10;

  const amountOfSquaresX = Math.floor(canvas.width / (squareDimension + gap));
  const amountOfSquaresY = Math.floor(canvas.height / (squareDimension + gap));

  const paddingLeft = (canvas.width % (squareDimension + gap)) / 2 + gap / 2;
  const paddingTop = (canvas.height % (squareDimension + gap)) / 2 + gap / 2;

  for (let i = 0; i < amountOfSquaresY; i++) {
    const y = paddingTop + (squareDimension + gap) * i;

    for (let j = 0; j < amountOfSquaresX; j++) {
      const x = paddingLeft + (squareDimension + gap) * j;
      ctx.fillRect(x, y, squareDimension, squareDimension);
    }
  }
};

main();
