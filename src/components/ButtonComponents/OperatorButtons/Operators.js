import React from "react";
import { operators } from "../../../data";
import style from "./Operators.module.css";

const Operators = ({
  children: {
    lastClicked,
    setLastClicked,
    evaluated,
    setEvaluated,
    display,
    setDisplay
  }
}) => {
  // generates buttons
  return operators.map(({ value, char }, idx) => {
    const specialArray = ["/", "*", "-", "+", "="];

    // checks to see if last clicked was a number, and if so evaluate current point
    // ignores clicks if not preceeded by a number
    const handleClick = () => {
      if (value === "/" && specialArray.indexOf(lastClicked) === -1) {
        setEvaluated(prevEvaluated => display);
        return setLastClicked(prevClicked => "/");
      }
      if (value === "*" && specialArray.indexOf(lastClicked) === -1) {
        setEvaluated(prevEvaluated => display);
        return setLastClicked(prevClicked => "*");
      }
      if (value === "-" && specialArray.indexOf(lastClicked) === -1) {
        setEvaluated(prevEvaluated => display);
        return setLastClicked(prevClicked => "-");
      }
      if (value === "+" && specialArray.indexOf(lastClicked) === -1) {
        setEvaluated(prevEvaluated => display);
        return setLastClicked(prevClicked => "+");
      }
      if (value === "=" && specialArray.indexOf(lastClicked) === -1) {
        setDisplay(prevDisplay => evaluated);
        return setLastClicked(prevClicked => evaluated);
      }
    };
    return (
      <button
        key={idx}
        type="button"
        value={value}
        onClick={handleClick}
        className={style.operatorButton}
      >
        {char}
      </button>
    );
  });
};

export default Operators;
