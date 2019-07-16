import React from "react";
import { numbers } from "../../../data";
import style from "./Numbers.module.css";

//import any components needed

//Import your array data to from the provided data file

const Numbers = ({ children: { nums, setNums, setDisplay } }) => {
  // STEP 2 - add the imported data to state

  return numbers.map(number => {
    return (
      <button
        type="button"
        number={number}
        onClick={() => setDisplay(number)}
        className={number === "0" ? style.numberButtonZero : style.numberButton}
      >
        {number}
      </button>
    );
  });
};

export default Numbers;
