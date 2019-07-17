import React from "react";
import style from "./Display.module.css";

const Display = ({ display }) => {
  return (
    <div className={style.displayField}>
      <span>{display}</span>
      {/* Display any props data here */}
    </div>
  );
};

export default Display;
