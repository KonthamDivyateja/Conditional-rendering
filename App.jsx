 import React, { useState } from "react";

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const boxStyle = {
    backgroundColor: isRed ? "red" : "blue",
    width: "200px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    margin: "10px 0"
  };

  return (
    <div>
      <div style={boxStyle}>
        The color is {isRed ? "Red" : "Blue"}
      </div>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
};

export default ColorToggle;