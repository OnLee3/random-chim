import "./Canvas.css";
import { useOnMounted } from "../utils/hooks";

type CanvasProps = {
  src: string;
};

export default function Canvas({ src }: CanvasProps) {
  useOnMounted(() => {
    const canvas = document.querySelector("canvas");
    const context = canvas?.getContext("2d");
    get_image();

    function get_image() {
      const image = new Image();
      image.src = src;
      image.onload = () => context?.drawImage(image, 0, 0);
    }
  });

  return <canvas className="canvas" />;
}
