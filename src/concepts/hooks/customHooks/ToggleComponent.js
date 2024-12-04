import React from "react";
import useToggle from "./useToggle"; // assuming it's in the same folder

function ToggleComponent() {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <p>The toggle is {isToggled ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;
