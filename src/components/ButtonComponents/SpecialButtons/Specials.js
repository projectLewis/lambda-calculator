import React from "react";
import { specials } from "../../../data";
import style from "./Specials.module.css";

const Specials = ({
  children: { setLastClicked, setEvaluated, setDisplay }
}) => {
  // STEP 2 - add the imported data to state
  return specials.map((specialChar, idx) => {
    const handleClick = () => {
      if (specialChar === "C") {
        setDisplay("0");
        setEvaluated("0");
        return setLastClicked("C");
      }
      if (specialChar === "+/-") {
        setDisplay(prevDisplay => `-${prevDisplay}`);
        return setLastClicked("+/-");
      }
      if (specialChar === "%") {
        setDisplay(prevDisplay => `${Number(prevDisplay) * 0.01}`);
        return setLastClicked("%");
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
