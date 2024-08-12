import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "../icons";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className={`transition-colors duration-1000 fixed top-4 right-4 w-10 h-10 rounded-lg flex justify-center items-center`}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeButton;
