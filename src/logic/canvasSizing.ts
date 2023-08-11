const resizeCanvas = (canvas: HTMLCanvasElement) => {
  console.log("running");
  const container = document.querySelector(
    ".canvas-container"
  ) as HTMLDivElement;

  const containerRect = container.getBoundingClientRect();
  canvas.width = containerRect.width;
};

export const setupCanvasSizing = (canvas: HTMLCanvasElement) => {
  resizeCanvas(canvas);
  window.addEventListener("resize", () => resizeCanvas(canvas));
};
