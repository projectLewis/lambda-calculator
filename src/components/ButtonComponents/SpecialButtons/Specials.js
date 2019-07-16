import React from "react";
import { specials } from "../../../data";
import style from "./Specials.module.css";

const Specials = ({ children: { specs, setSpecs, setDisplay } }) => {
  // STEP 2 - add the imported data to state
  const handleClick = () => {
    setDisplay("clicked");
  };
  return specials.map(specialChar => {
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
