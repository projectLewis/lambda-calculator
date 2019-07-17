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
  return operators.map(({ value, char }, idx) => {
    const specialArray = ["/", "*", "-", "+", "="];

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
