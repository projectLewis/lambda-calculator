import React from "react";
import { numbers } from "../../../data";
import style from "./Numbers.module.css";

//import any components needed

//Import your array data to from the provided data file

const Numbers = ({
  children: { setLastClicked, lastClicked, evaluated, setEvaluated, setDisplay }
}) => {
  // STEP 2 - add the imported data to state

  return numbers.map((number, idx) => {
    const handleClick = () => {
      console.log("case 0");
      // setDisplay(number);
      const specialArray = ["c", "+/-", "%", "/", "*", "-", "+", "="];
      if (lastClicked === "/") {
        console.log("case 1");
        if (number === "0") {
          console.log("case 2");
          return setDisplay(prevDisplay => {
            return (prevDisplay = "CANT DIVIDE BY ZERO!");
          });
        }
        setDisplay(prevDisplay => {
          return (prevDisplay = number);
        });
        const newNum = Number(evaluated) / Number(number);
        setEvaluated(prevEvaluated => {
          return (prevEvaluated = newNum);
        });
        return setLastClicked(prevClicked => {
          return (prevClicked = number);
        });
      }
      if (lastClicked === "*") {
        console.log("case 3");
        setDisplay(prevDisplay => {
          return (prevDisplay = number);
        });
        const newNum = Number(number) * Number(evaluated);
        setEvaluated(prevEvaluated => {
          return (prevEvaluated = newNum);
        });
        return setLastClicked(prevClicked => {
          return (prevClicked = number);
        });
      }
      if (lastClicked === "-") {
        console.log("case 4");
        setDisplay(prevDisplay => {
          return (prevDisplay = number);
        });
        const newNum = Number(evaluated) - Number(number);
        setEvaluated(prevEvaluated => {
          return (prevEvaluated = newNum);
        });
        return setLastClicked(prevClicked => {
          return (prevClicked = number);
        });
      }
      if (lastClicked === "+") {
        console.log("case 4");
        setDisplay(prevDisplay => {
          return (prevDisplay = number);
        });
        const newNum = Number(evaluated) + Number(number);
        setEvaluated(prevEvaluated => {
          return (prevEvaluated = newNum);
        });
        return setLastClicked(prevClicked => {
          return (prevClicked = number);
        });
      }
      if (specialArray.indexOf(lastClicked) === -1) {
        console.log("case 5");
        setDisplay(prevDisplay => {
          if (prevDisplay === "0") {
            console.log("case 6");
            return (prevDisplay = number);
          } else {
            console.log("case 7");
            return (prevDisplay += number);
          }
        });
        return setLastClicked(prevClicked => {
          return (prevClicked = number);
        });
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
