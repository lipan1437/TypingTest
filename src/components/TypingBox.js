import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAccuracy, updateKeysPressed } from "../redux/action";
const TypingBox = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const userInput = e.target.value;

    setInput(userInput);

    dispatch(updateKeysPressed(userInput.length));
  };

  const handleBlur = () =>{

    dispatch(updateAccuracy(input));

  }


  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default TypingBox;
