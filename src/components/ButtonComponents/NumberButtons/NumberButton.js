import React from "react";
import Numbers from "./Numbers";
import style from "./Numbers.module.css";

const NumberButton = ({ nums, setNums, setDisplay }) => {
  return (
    <div className={style.numberContainer}>
      <Numbers>{{ nums, setNums, setDisplay }}</Numbers>
    </div>
  );
};

export default NumberButton;
