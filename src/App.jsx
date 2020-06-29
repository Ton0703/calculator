import React, { useState } from "react";
import Buttons from "./data";
import "./App.scss";

function App() {
  const [output, setOutput] = useState(0);
  const [isOperator, setIsOperator] = useState(true);
  const [isDecimalAdded, setIsDecimalAdded] = useState(true);

  const handleButtonClick = (value) => {
    switch (value) {
      case "AC":
        setOutput(0);
        setIsOperator(true);
        setIsDecimalAdded(true);
        break;
      case "±":
        if(output === 0) return
        setOutput((output * -1).toString());
        break;
      case "%":
        if(output === 0) return;
        setOutput((output / 100).toString());
        break;
      case ".":
        isDecimalAdded && setOutput(output + ".");
        setIsDecimalAdded(false);
        break;
      case "+":
      case "-":
      case "x":
      case "÷":
        if (output === 0) return;
        isOperator && setOutput(output + value);
        setIsDecimalAdded(true);
        setIsOperator(false);
        break;
      case "0":
        if (output === 0) return;
        setOutput(output + "0");
        break;
      case "=":
        let result = output
          .replace(new RegExp("x", "g"), "*")
          .replace(new RegExp("÷", "g"), "/");
        setOutput(
          eval(result).toString().length > 9 &&
            eval(result).toString().includes(".")
            ? eval(result).toFixed(9).toString()
            : eval(result).toString()
        );
        break;
      default:
        value !== "=" && setOutput(output === 0 ? value : output + value);
        setIsOperator(true);
    }
  };
  return (
    <div className="App">
      <div
        className="output"
        style={{ fontSize: output.length > 13 ? "2rem" : "3rem" }}
      >
        <span>
        {output}
        </span>
      </div>
      <div className="input">
        {Buttons.map((item, index) => (
          <div
            key={index}
            className="button"
          >
            <button onClick={() => handleButtonClick(item.value)}>{item.value}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
