import React, { useEffect } from "react";
import { Up, Down } from "../icons";

function SliderButton({ isUp, setIsUp, ref }) {

    const toggleIsUp = () => {
        setIsUp(isUp => !isUp);
    }
    
    useEffect(() => {
        toggleIsUp()
    }, [setIsUp])

  return (
    <div onClick={toggleIsUp}>
      {!isUp ? (
        <div>
          <Up />
        </div>
      ) : (
        <div>
          <Down />
        </div>
      )}
    </div>
  );
}

export default SliderButton;
