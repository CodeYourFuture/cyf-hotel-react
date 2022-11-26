import React from "react";
let useState = React.useState;

function Highlight(props) {
  let [color, setColor] = useState(props.color);

  function highlightRed() {
    setColor("red");
  }

  return <span className={color} onClick={highlightRed} />;
}

export default Highlight;
