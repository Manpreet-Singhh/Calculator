import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      if (calculatedResult === Infinity || calculatedResult === -Infinity) {
        setResult("Infinity");
      } else if (isNaN(calculatedResult)) {
        setResult("NaN");
      } else {
        setResult(calculatedResult.toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input className="input-field" type="text" value={input} readOnly />
      <div className="output">{result}</div>
      <div className="button-grid">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
    </div>
  );
}
