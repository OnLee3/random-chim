import "./Canvas.css";
import { useEffect } from "react";

export default function Canvas() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const image = canvas?.toDataURL("image/png");
    if (!image) return;
    const link = document.createElement("a");
    link.href = image;
    link.download = "myPainting";
    link.click();
  }, []);

  return <canvas className="canvas" />;
}
