import React, { useState } from "react";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import styles from "./App.module.css";

function App() {
  const [calVal, setCalVal] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal.replace("÷", "/").replace("×", "*"));
        setCalVal(result.toString());
      } catch {
        setCalVal("Error");
      }
    } else {
      setCalVal(calVal + buttonText);
    }
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
    <div className={`${styles.calculator} ${isDarkMode ? styles.dark : ""}`}>
      
      <button className={styles.toggleButton} onClick={toggleDarkMode}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
    </>
  );
}

export default App;
