import React, { useState } from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import NumberButton from "./components/ButtonComponents/NumberButtons/NumberButton";
import SpecialButton from "./components/ButtonComponents/SpecialButtons/SpecialButton";
import OperatorButton from "./components/ButtonComponents/OperatorButtons/OperatorButton";

function App() {
  // display  -- contents of the display field
  // evaluated -- keeps track of math. Initial math done in "numbers", subsequent tracking done in operators
  // keeps track of last clicked item. So that the evaluations know if an operator was clicked previously
  const [display, setDisplay] = useState("0");
  const [evaluated, setEvaluated] = useState("0");
  const [lastClicked, setLastClicked] = useState("");

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display display={display} />
        <div className="overallButtonsContainer">
          <div>
            <SpecialButton
              setLastClicked={setLastClicked}
              setEvaluated={setEvaluated}
              setDisplay={setDisplay}
            />
            <NumberButton
              lastClicked={lastClicked}
              setLastClicked={setLastClicked}
              evaluated={evaluated}
              setEvaluated={setEvaluated}
              setDisplay={setDisplay}
            />
          </div>
          <OperatorButton
            lastClicked={lastClicked}
            setLastClicked={setLastClicked}
            setEvaluated={setEvaluated}
            setDisplay={setDisplay}
            evaluated={evaluated}
            display={display}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
