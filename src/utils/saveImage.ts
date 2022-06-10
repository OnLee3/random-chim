export default function saveImage() {
  const canvas = document.querySelector(".canvas") as HTMLCanvasElement;
  const image = canvas.toDataURL("image/png");
  if (!image) return;
  const link = document.createElement("a");
  link.href = image;
  link.download = "침투부-랜덤짤";
  link.click();
}
