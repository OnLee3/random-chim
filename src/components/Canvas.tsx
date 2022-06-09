import "./Canvas.css";
import { useOnMounted } from "../utils/hooks";

type CanvasProps = {
  src: string;
};

export default function Canvas({ src }: CanvasProps) {
  useOnMounted(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const dpr = window.devicePixelRatio;
    canvas.width = 300 * dpr;
    canvas.height = 300 * dpr;
    const context = canvas.getContext("2d");
    get_image();

    function get_image() {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        if (!canvas) return;
        const h_ratio = canvas.width / image.width;
        const v_ratio = canvas.height / image.height;
        const ratio = Math.min(h_ratio, v_ratio);
        const centerShift_x = (canvas.width - image.width * ratio) / 2;
        const centerShift_y = (canvas.height - image.height * ratio) / 2;
        context?.clearRect(0, 0, canvas.width, canvas.height);
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
        // context?.scale(dpr, dpr);
      };
    }
  });

  return <canvas className="canvas" />;
}
