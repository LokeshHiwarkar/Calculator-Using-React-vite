import React from "react";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "%",
    "C",
    "÷",
    "×",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
    "(",
    ")",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            buttonName === "=" ? styles.equalsButton : ""
          }`}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
