import React from "react";
import { operators } from "../../../data";
import style from "./Operators.module.css";

const Operators = ({ children: { ops, setOps, setDisplay } }) => {
  // STEP 2 - add the imported data to state
  return operators.map(({ value, char }) => {
    return (
      <button
        type="button"
        value={value}
        onClick={() => console.log(value)}
        className={style.operatorButton}
      >
        {char}
      </button>
    );
  });
};

export default Operators;
