import React from "react";
import style from "./Specials.module.css";
import Specials from "./Specials";

const SpecialButton = ({ nums, setNums, display, setDisplay }) => {
  return (
    <div className={style.specialContainer}>
      <Specials>{{ nums, setNums, setDisplay }}</Specials>
    </div>
  );
};

export default SpecialButton;
