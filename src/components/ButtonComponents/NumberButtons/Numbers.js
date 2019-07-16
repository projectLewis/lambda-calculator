import React, { useState } from "react";
import { numbers } from "../../../data";
import style from "./Numbers.module.css";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  const [nums, setNums] = useState(numbers);
  // STEP 2 - add the imported data to state
  return nums.map(number => {
    return (
      <button
        number={number}
        onClick={e => console.log(number)}
        className={number === "0" ? style.numberButtonZero : style.numberButton}
      >
        {number}
      </button>
    );
  });
};

export default Numbers;
