import React, { useEffect } from "react";
import { Arrow } from "../icons";

function SliderButton({ isUp, setIsUp, ref }) {
  const toggleIsUp = () => {
    setIsUp((isUp) => !isUp);
  };

  useEffect(() => {
    toggleIsUp();
  }, [setIsUp]);

  return (
    <div onClick={toggleIsUp}>
      <div
        className={`transform transition-transform duration-1000 ${
          isUp ? "rotate-180" : "rotate-0"
        }`}
      >
        <Arrow />
      </div>
    </div>
  );
}

export default SliderButton;
