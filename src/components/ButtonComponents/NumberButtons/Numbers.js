import React, { useState } from "react";
import { numbers } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  const [nums, setNums] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {nums.map(number => {
        return <button number={number}>{number}</button>;
      })}
    </div>
  );
};

export default Numbers;
