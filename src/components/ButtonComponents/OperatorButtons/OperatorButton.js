import React from "react";
import style from "./Operators.module.css";
import Operators from "./Operators";

const OperatorButton = () => {
  return (
    <div className={style.operatorsContainer}>
      <Operators />
    </div>
  );
};

export default OperatorButton;
