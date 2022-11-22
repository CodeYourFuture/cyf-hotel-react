import React from "react";
let useState = React.useState;

function Highlighter(props) {
  let [color, setColor] = useState(props.color);

  function highlightPurple() {
    setColor("purple");
  }
  return <span className={color} onClick={highlightPurple} />;
}

export default Highlighter;
