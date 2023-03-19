import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [color, setColor] = useState("white");
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />

      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          setHeading("submitted");
        }}
        onMouseOut={() => {
          setColor("white");
        }}
        onMouseOver={() => {
          setColor("black");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
