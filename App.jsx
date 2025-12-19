 import React, { useState } from "react";

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const divStyle = {
    backgroundColor: isRed ? "red" : "blue",
    width: "200px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginBottom: "10px"
  };

  return (
    <div>
      <div style={divStyle}>
        The color is {isRed ? "Red" : "Blue"}
      </div>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
};

export default ColorToggle;