import React from "react";
import style from "./Specials.module.css";
import Specials from "./Specials";

// props passed and container styling

const SpecialButton = ({ setLastClicked, setEvaluated, setDisplay }) => {
  return (
    <div className={style.specialContainer}>
      <Specials>{{ setLastClicked, setEvaluated, setDisplay }}</Specials>
    </div>
  );
};

export default SpecialButton;
