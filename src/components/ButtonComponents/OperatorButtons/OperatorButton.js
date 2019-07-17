import React from "react";
import style from "./Operators.module.css";
import Operators from "./Operators";

// props passed and container styling

const OperatorButton = ({
  lastClicked,
  setLastClicked,
  evaluated,
  setEvaluated,
  display,
  setDisplay
}) => {
  return (
    <div className={style.operatorsContainer}>
      <Operators>
        {{
          lastClicked,
          setLastClicked,
          evaluated,
          setEvaluated,
          display,
          setDisplay
        }}
      </Operators>
    </div>
  );
};

export default OperatorButton;
