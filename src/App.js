import logo from "./logo.svg";
import "./App.css";

import { useSelector } from "react-redux";

function App() {
  const keysPressed = useSelector((state) => state.keysPressed);
  return (
    <div className="App">
      <h1>Touch Typing Practices</h1>
     
      <p>Keys Pressed: {keysPressed}</p>
    </div>
  );
}

export default App;
