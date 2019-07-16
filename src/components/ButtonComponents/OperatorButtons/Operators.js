import React from "react";
import { operators } from "../../../data";
import style from "./Operators.module.css";

const Operators = ({
  children: { lastClicked, setLastClicked, evaluated, setEvaluated, setDisplay }
}) => {
  // STEP 2 - add the imported data to state
  return operators.map(({ value, char }, idx) => {
    const specialArray = ["c", "+/-", "%", "/", "*", "-", "+", "="];

    const handleClick = () => {
      console.log(`lastClicked: ${lastClicked}`);
      console.log("case a");
      if (value === "/" && specialArray.indexOf(lastClicked) === -1) {
        console.log("case b");
        setEvaluated(prevEvaluated => {
          return (prevEvaluated = lastClicked);
        });
        console.log(`evaluated: ${evaluated}`);
        return setLastClicked(prevClicked => {
          return (prevClicked = "/");
        });
      }
      if (value === "*" && specialArray.indexOf(lastClicked) === -1) {
        console.log("case c");
        setEvaluated(prevEvaluated => {
          return (prevEvaluated = lastClicked);
        });
        console.log(`evaluated: ${evaluated}`);
        return setLastClicked(prevClicked => {
          return (prevClicked = "*");
        });
      }
      if (value === "-" && specialArray.indexOf(lastClicked) === -1) {
        console.log("case d");
        setEvaluated(prevEvaluated => {
          return (prevEvaluated = lastClicked);
        });
        console.log(`evaluated: ${evaluated}`);
        return setLastClicked(prevClicked => {
          return (prevClicked = "-");
        });
      }
      if (value === "+" && specialArray.indexOf(lastClicked) === -1) {
        console.log("case e");
        setEvaluated(prevEvaluated => {
          return (prevEvaluated = lastClicked);
        });
        console.log(`evaluated: ${evaluated}`);
        return setLastClicked(prevClicked => {
          return (prevClicked = "+");
        });
      }
      if (value === "=" && specialArray.indexOf(lastClicked) === -1) {
        console.log("case f");
        console.log(`evaluated: ${evaluated}`);
        setDisplay(evaluated);
        return setLastClicked(prevClicked => {
          return (prevClicked = "=");
        });
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
