import logo from "./logo.svg";
import "./App.css";
import TypingBox from "./components/TypingBox";
import NextKeys from "./components/NextKeys";
import Timer from "./components/Timer";
import Accuracy from "./components/Accuracy";
import { useSelector } from "react-redux";

function App() {
  const keysPressed = useSelector((state) => state.keysPressed);
  return (
    <div className="App">
      <h1>Touch Typing Practices</h1>
      <TypingBox />
      <NextKeys />
      <Timer />
      <Accuracy />
      <p>Keys Pressed: {keysPressed}</p>
    </div>
  );
}

export default App;
