import "./App.css";
import { MouseEvent, useState } from "react";
import Canvas from "./components/Canvas";
import Edits from "./components/Edits";
import getRandomImage from "./utils/getRandomImage";
import saveImage from "./utils/saveImage";

const people = new Set<string>();
const emotions = new Set<string>();

function App() {
  const [src, setSrc] = useState("");

  async function clickHandler({ target }: MouseEvent) {
    if (!(target instanceof Element)) return;
    if (target.classList.contains("filter-list__emotion")) {
      target.classList.toggle("selected");
      if (emotions.has(target.id)) emotions.delete(target.id);
      else emotions.add(target.id);
    }
    if (target.classList.contains("filter-list__people")) {
      target.classList.toggle("selected");
      if (people.has(target.id)) people.delete(target.id);
      else people.add(target.id);
    }
    if (target.className === "save-button") {
      saveImage();
    }
    if (target.className === "create-button") {
      setSrc(getRandomImage(people, emotions));
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
