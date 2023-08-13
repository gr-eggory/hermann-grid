export const resizeCanvas = (canvas: HTMLCanvasElement) => {
  const container = document.querySelector(
    ".canvas-container"
  ) as HTMLDivElement;

  const containerRect = container.getBoundingClientRect();
  canvas.width = containerRect.width;
};

interface GridConfig {
  squareDimension?: number;
  gap?: number;
}

export const drawGrid = (
  canvas: HTMLCanvasElement,
  config: GridConfig = {}
) => {
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const { squareDimension = 80, gap = 15 } = config;

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

export const setupHermanGrid = (canvas: HTMLCanvasElement) => {
  resizeCanvas(canvas);
  drawGrid(canvas);

  window.addEventListener("resize", () => {
    resizeCanvas(canvas);
    drawGrid(canvas);
  });
};
