import React, { useState } from "react";
import Buttons from "./data";
import "./App.scss";

function App() {
  const [output, setOutput] = useState(0);
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (value) => {
    
    switch (value) {
      case "AC":
        setOutput(0);
        setMemory(null);
        setOperator(null);
        break;
      case "±":
        setOutput((output * -1).toString());
        console.log(value)
        break;
      case "%":
        setOutput((output / 100).toString());
        break;
      case '.':
        if(output.includes('.'))return;
        setOutput(output + '.')
        break
      default:
        setOutput(output === 0 ? value : output + value);
    }
  };
  return (
    <div className="App">
      <div className="output">{output}</div>
      <div className="input">
        {Buttons.map((item, index) => (
          <div
            key={index}
            className="button"
            onClick={() => handleButtonClick(item.value)}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
