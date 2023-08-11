import "./style.css";

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  console.log("running");
  const container = document.querySelector(
    ".canvas-container"
  ) as HTMLDivElement;

  const containerRect = container.getBoundingClientRect();
  canvas.width = containerRect.width;
};

const setupCanvasSizing = (canvas: HTMLCanvasElement) => {
  resizeCanvas(canvas);
  window.addEventListener("resize", () => resizeCanvas(canvas));
};

const main = () => {
  const canvas = document.getElementById("hermann-grid") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  setupCanvasSizing(canvas);
};

main();
