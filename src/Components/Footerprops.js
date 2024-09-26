import React from "react";

function Footerprops(props) {
  return (
    <footer className="footer">
      <ul className="list-group">
        <li>{props.address}</li>
        <li>{props.email}</li>
        <li>{props.tel}</li>
      </ul>
    </footer>
  );
}

export default Footerprops;
