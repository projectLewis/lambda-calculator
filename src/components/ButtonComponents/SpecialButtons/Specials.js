import React from "react";
import { specials } from "../../../data";
import style from "./Specials.module.css";

const Specials = ({
  children: { setLastClicked, setEvaluated, setDisplay }
}) => {
  // generates buttons
  return specials.map((specialChar, idx) => {
    const handleClick = () => {
      // 'C' resets the calculator to starting point
      if (specialChar === "C") {
        setDisplay(prevDisplay => "0");
        setEvaluated(prevEvaluated => "0");
        return setLastClicked("");
      }
      if (specialChar === "+/-") {
        setEvaluated(prevEvaluated => "0");
        return setDisplay(prevDisplay => `-${prevDisplay}`);
      }
      if (specialChar === "%") {
        return setDisplay(prevDisplay => `${Number(prevDisplay) * 0.01}`);
      }
    };
    return (
      <button
        key={idx}
        type="button"
        special={specialChar}
        onClick={handleClick}
        className={style.specialButton}
      >
        {specialChar}
      </button>
    );
  });
};

export default Specials;
