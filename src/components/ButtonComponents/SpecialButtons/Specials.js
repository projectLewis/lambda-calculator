import React, { useState } from "react";
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specs, setSpecs] = useState(specials);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specs.map(specialChar => {
        return <button special={specialChar}>{specialChar}</button>;
      })}
    </div>
  );
};

export default Specials;
