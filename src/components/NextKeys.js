import React from "react";
import { useSelector } from "react-redux";
import "./style.css"
const NextKeys = () => {
  const nextKeys = useSelector((state) => state.nextKeys);
  return <p className="next" >Next Keys: {nextKeys}</p>;
};

export default NextKeys;
