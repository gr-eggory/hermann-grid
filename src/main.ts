import "./style.css";

const main = () => {
  const canvas = document.getElementById("hermann-grid") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const container = document.querySelector(
    ".canvas-container"
  ) as HTMLDivElement;

  const containerRect = container.getBoundingClientRect();
  canvas.width = containerRect.width;

};

main();
