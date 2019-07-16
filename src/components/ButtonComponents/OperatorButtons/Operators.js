import React, { useState } from "react";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ops, setOps] = useState(operators);

  return (
    <div>
      {/* {console.log(operators[0].char)} */}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {ops.map(({ value, char }) => {
        return <button value={value}>{char}</button>;
      })}
    </div>
  );
};

export default Operators;
