import React from "react";
import { numbers } from "../../../data";
import style from "./Numbers.module.css";

const Numbers = ({
  children: { setLastClicked, lastClicked, evaluated, setEvaluated, setDisplay }
}) => {
  return numbers.map((number, idx) => {
    const handleClick = () => {
      console.log("case 0");
      const specialArray = ["/", "*", "-", "+", "="];
      if (lastClicked === "/") {
        if (number === "0") {
          return setDisplay(prevDisplay => "CANT DIVIDE BY ZERO!");
        }
        setDisplay(prevDisplay => number);
        const newNum = Number(evaluated) / Number(number);
        setEvaluated(prevEvaluated => newNum);
        return setLastClicked(prevClicked => number);
      }
      if (lastClicked === "*") {
        setDisplay(prevDisplay => number);
        const newNum = Number(number) * Number(evaluated);
        setEvaluated(prevEvaluated => newNum);
        return setLastClicked(prevClicked => number);
      }
      if (lastClicked === "-") {
        setDisplay(prevDisplay => number);
        const newNum = Number(evaluated) - Number(number);
        setEvaluated(prevEvaluated => newNum);
        return setLastClicked(prevClicked => number);
      }
      if (lastClicked === "+") {
        setDisplay(prevDisplay => number);
        const newNum = Number(evaluated) + Number(number);
        setEvaluated(prevEvaluated => newNum);
        return setLastClicked(prevClicked => number);
      }
      if (specialArray.indexOf(lastClicked) === -1) {
        setDisplay(prevDisplay => {
          if (prevDisplay === "0") {
            return (prevDisplay = number);
          } else {
            return (prevDisplay += number);
          }
        });
        return setLastClicked(prevClicked => number);
      }
    };

    return (
      <button
        key={idx}
        type="button"
        number={number}
        onClick={handleClick}
        className={number === "0" ? style.numberButtonZero : style.numberButton}
      >
        {number}
      </button>
    );
  });
};

export default Numbers;
