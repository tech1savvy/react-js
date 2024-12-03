import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [history, setHistory] = useState([]);

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);

    if (celsiusValue !== "") {
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
      addToHistory(celsiusValue, fahrenheitValue.toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);

    if (fahrenheitValue !== "") {
      const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
      setCelsius(celsiusValue.toFixed(2));
      addToHistory(celsiusValue.toFixed(2), fahrenheitValue);
    } else {
      setCelsius("");
    }
  };

  const addToHistory = (celsiusValue, fahrenheitValue) => {
    setHistory((prevHistory) => [
      ...prevHistory,
      `${celsiusValue} C = ${fahrenheitValue} F`,
    ]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <div>
        <label>
          Celsius:
          <input type="number" value={celsius} onChange={handleCelsiusChange} />
        </label>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
        </label>
      </div>
      <h3>Conversion History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={clearHistory}>Clear History</button>
    </div>
  );
};

export default TemperatureConverter;
