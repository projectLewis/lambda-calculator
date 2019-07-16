import React from "react";
import { specials } from "../../../data";
import style from "./Specials.module.css";

const Specials = ({ children: { specs, setSpecs, display, setDisplay } }) => {
  // STEP 2 - add the imported data to state
  return specials.map(specialChar => {
    const handleClick = () => {
      if (specialChar === "C") {
        return setDisplay("0");
      }
      if (specialChar === "+/-") {
        return setDisplay(prevDisplay => `-${prevDisplay}`);
      }
      if (specialChar === "%") {
        return setDisplay(prevDisplay => `${Number(prevDisplay) * 0.01}`);
      }
    };
    return (
      <button
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
