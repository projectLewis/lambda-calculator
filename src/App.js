import React, { useState } from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import NumberButton from "./components/ButtonComponents/NumberButtons/NumberButton";
import SpecialButton from "./components/ButtonComponents/SpecialButtons/SpecialButton";
import OperatorButton from "./components/ButtonComponents/OperatorButtons/OperatorButton";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [display, setDisplay] = useState("0");
  const [nums, setNums] = useState(null);
  const [ops, setOps] = useState(null);
  const [specs, setSpecs] = useState(null);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display display={display} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "20px",
            paddingLeft: "17px"
          }}
        >
          <div>
            <SpecialButton
              specs={specs}
              setSpecs={setSpecs}
              setDisplay={setDisplay}
            />
            <NumberButton
              nums={nums}
              setNums={setNums}
              setDisplay={setDisplay}
            />
          </div>
          <OperatorButton ops={ops} setOps={setOps} setDisplay={setDisplay} />
        </div>
      </div>
    </div>
  );
}

export default App;
