import React from "react";
function Footing(props) {
  return (
    <footer>
      <ul>
        {props.address.map((adres, index) => (
          <li key={index}>{adres}</li>
        ))}
      </ul>
    </footer>
  );
}
export default Footing;
