import React from "react";
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div className={styles.display}>
      <input
        type="text"
        className={styles.displayInput}
        value={displayValue}
        placeholder="Lokesh Calculator"
        readOnly
      />
    </div>
  );
};

export default Display;
