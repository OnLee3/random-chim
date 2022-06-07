import "./App.css";
import { useState } from "react";
import Canvas from "./components/Canvas";
import Edits from "./components/Edits";

function App() {
  const [src, setSrc] = useState("/src/assets/Pearl/기쁨00.jpg");
  function create_handler(people: string[], emotions: string[]) {
    // TODO: 랜덤함수
    const newSrc = "/src/assets/Chim/분노00.PNG";
    setSrc(newSrc);
  }

  return (
    <div className="App">
      <Canvas src={src} key={src} />
      <Edits create_handler={create_handler} />
    </div>
  );
}

export default App;
