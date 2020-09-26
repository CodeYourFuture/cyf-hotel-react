import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <ul>
        {props.address.map(data => (
          <li>{data}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
