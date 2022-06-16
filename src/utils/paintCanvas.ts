export default function paintCanvas(src: string) {
  const canvas = document.querySelector("canvas");
  const imageWidth = 300;
  const imageHeight = 300;

  try {
    if (!canvas) throw "캔버스가 없습니다.";
    const dpr = window.devicePixelRatio;
    canvas.width = imageWidth * dpr;
    canvas.height = imageHeight * dpr;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = src;
    image.onload = () => {
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
    };
  } catch (e) {
    console.log(e);
  }
}
