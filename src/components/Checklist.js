import React, { useState } from "react";

const Checklist = () => {
  const options = ["option-1", "option-2", "option-3"];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedOptions((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((option) => option !== value)
      );
    }
  };

  return (
    <div>
      <h2>Checklist</h2>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={option}
              value={option}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </form>

      <h3>Selected Options:</h3>
      <ul>
        {selectedOptions.length > 0 ? (
          selectedOptions.map((option, index) => <li key={index}>{option}</li>)
        ) : (
          <li>No options selected</li>
        )}
      </ul>
    </div>
  );
};

export default Checklist;
