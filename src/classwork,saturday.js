import React, { useState } from "react";

function Weather() {
  // Create a new state variable with useState to fix this app! Think
  // carefully about how you name it.
  const [temperature, setTemperature] = useState(0);
  return (
    <div>
      <h1>Weather in London</h1>
      <button onClick={() => setTemperature(Math.random())}>Temperature</button>
      <p>Temperature will be {temperature}°C.</p>
    </div>
  );
}

// export default Weather;

import React, { useState } from "react";

function Highlighter(props) {
  const [color, setColor] = useState(props.color);
  function highlightPurple() {
    setColor(color => (color === "blue" ? "purple" : "blue"));
  }

  return (
    <span className={color} onClick={highlightPurple}>
      {props.word}
    </span>
  );
}

export { Highlighter, Weather };
