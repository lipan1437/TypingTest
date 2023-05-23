import React from "react";
import { useSelector } from "react-redux";

const Accuracy = () => {
  const accuracy = useSelector((state) => state.accuracy);

  return <p>Accuracy: {accuracy}%</p>;
};

export default Accuracy;
