import React, { useState } from "react";
import { specials } from "../../../data";
import style from "./Specials.module.css";

const Specials = () => {
  const [specs, setSpecs] = useState(specials);
  // STEP 2 - add the imported data to state
  return specs.map(specialChar => {
    return (
      <button
        type="button"
        special={specialChar}
        onClick={() => console.log(specialChar)}
        className={style.specialButton}
      >
        {specialChar}
      </button>
    );
  });
};

export default Specials;
