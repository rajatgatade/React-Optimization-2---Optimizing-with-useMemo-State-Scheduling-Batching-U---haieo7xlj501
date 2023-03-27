import React, { Profiler, useMemo } from "react";
import { useState } from "react";
import "../styles/App.css";
import primeNumber from "../function";

const App = () => {
  return <OptimizeTheOperation />;
};

const OptimizeTheOperation = ({ onClick }) => {
  const [number, setNumber] = useState(10000);
  const [inputValue, setInputValue] = useState("");

  const prime = useMemo(() => primeNumber(number), [number]);

  const submitHandler = (event) => {
    event.preventDefault();
    const value = Number(event.target.num.value);
    setNumber(value);
    setInputValue(value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <br />
      Enter the number:
      <form onSubmit={submitHandler}>
        <input id="num" value={inputValue} onChange={handleInputChange} />
        <button id="submit" type="submit">
          Click me
        </button>
      </form>
      <br />
      <div className="width">
        Result of expensive operation:
        <ul>
          {prime.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default App;

