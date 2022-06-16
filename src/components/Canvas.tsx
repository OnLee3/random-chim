import "./Canvas.css";
import { useOnMounted } from "../utils/hooks";
import paintCanvas from "../utils/paintCanvas";

type CanvasProps = {
  src: string;
};

export default function Canvas({ src }: CanvasProps) {
  useOnMounted(() => {
    paintCanvas(src);
  });

  return <canvas className="canvas" />;
}
