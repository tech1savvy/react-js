import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
import ThemeStatus from "./ThemeStatus";

function ThemeApp() {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Example with Context</h1>
        <ThemeStatus />
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default ThemeApp;
