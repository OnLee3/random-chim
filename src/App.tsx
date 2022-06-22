import "./App.css";
import { MouseEvent, useState } from "react";
import Canvas from "./components/Canvas";
import Edits from "./components/Edits";
import getRandomImage from "./utils/getRandomImage";
import saveImage from "./utils/saveImage";
import toggleFilter from "./utils/toggleFilter";

const people = new Set<string>();
const emotions = new Set<string>();

function App() {
  const [src, setSrc] = useState("");

  async function clickHandler({ target }: MouseEvent) {
    if (!(target instanceof Element)) return;
    if (target.classList.contains("filter-list__emotion")) {
      toggleFilter(target, emotions);
    }
    if (target.classList.contains("filter-list__people")) {
      toggleFilter(target, people);
    }
    if (target.className === "save-button") {
      saveImage();
    }
    if (target.className === "create-button") {
      setSrc(getRandomImage(src, people, emotions) as any);
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
