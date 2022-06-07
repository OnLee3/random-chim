import "./App.css";
import { MouseEvent, useState } from "react";
import Canvas from "./components/Canvas";
import Edits from "./components/Edits";

function App() {
  const [src, setSrc] = useState("/src/assets/Pearl/기쁨00.jpg");

  function clickHandler({ target }: MouseEvent) {
    if (!(target instanceof Element)) return;
    if (target.className === "filter-list__emotion") {
      console.log(target.id);
    }
    if (target.className === "filter-list__people") {
      console.log(target.id);
    }
    if (target.className === "save-button") {
      const canvas = document.querySelector("canvas");
      const image = canvas?.toDataURL("image/png");
      if (!image) return;
      const link = document.createElement("a");
      link.href = image;
      link.download = "침투부-랜덤짤";
      link.click();
    }
    if (target.className === "create-button") {
      const newSrc = "/src/assets/Chim/분노00.PNG";
      setSrc(newSrc);
    }
  }

  return (
    <div onClick={clickHandler} className="App">
      <Canvas src={src} key={src} />
      <Edits />
    </div>
  );
}

export default App;
