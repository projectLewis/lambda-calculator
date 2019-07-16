import React from "react";
import style from "./Operators.module.css";
import Operators from "./Operators";

const OperatorButton = ({ ops, setOps, setDisplay }) => {
  return (
    <div className={style.operatorsContainer}>
      <Operators>{{ ops, setOps, setDisplay }}</Operators>
    </div>
  );
};

export default OperatorButton;
