import React from "react";
import style from "./Specials.module.css";
import Specials from "./Specials";

const SpecialButton = () => {
  return (
    <div className={style.specialContainer}>
      <Specials />
    </div>
  );
};

export default SpecialButton;
