import React from "react";
import Numbers from "./Numbers";
import style from "./Numbers.module.css";

const NumberButton = props => {
  return (
    <div className={style.numberContainer}>
      <Numbers />
    </div>
  );
};

export default NumberButton;
