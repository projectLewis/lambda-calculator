import React from "react";
import Numbers from "./Numbers";
import style from "./Numbers.module.css";

// props passed and container styling

const NumberButton = ({
  lastClicked,
  setLastClicked,
  evaluated,
  setEvaluated,
  setDisplay
}) => {
  return (
    <div className={style.numberContainer}>
      <Numbers>
        {{ lastClicked, setLastClicked, evaluated, setEvaluated, setDisplay }}
      </Numbers>
    </div>
  );
};

export default NumberButton;
