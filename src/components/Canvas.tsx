import "./Canvas.css";
import { useOnMounted } from "../utils/hooks";

type CanvasProps = {
  src: string;
};

export default function Canvas({ src }: CanvasProps) {
  useOnMounted(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const { width, height } = canvas;
    const context = canvas.getContext("2d");
    get_image();

    function get_image() {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        const h_ratio = width / image.width;
        const v_ratio = height / image.height;
        const ratio = Math.min(h_ratio, v_ratio);
        const centerShift_x = (width - image.width * ratio) / 2;
        const centerShift_y = (height - image.height * ratio) / 2;
        context?.clearRect(0, 0, width, height);
        context?.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          centerShift_x,
          centerShift_y,
          image.width * ratio,
          image.height * ratio
        );
      };
    }
  });

  return <canvas className="canvas" />;
}
