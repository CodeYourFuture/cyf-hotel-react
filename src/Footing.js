import React from "react";
function Footing(props) {
  return (
    <footer>
      <ul>
        {props.address.map(adres => (
          <li>{adres}</li>
        ))}
      </ul>
    </footer>
  );
}
export default Footing;
