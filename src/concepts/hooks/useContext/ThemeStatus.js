import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeStatus() {
  const { theme } = useContext(ThemeContext); // Consume the theme value

  return (
    <p>Current theme is: {theme === "light" ? "Light Mode" : "Dark Mode"}</p>
  );
}

export default ThemeStatus;
