import React from "react";

function Footer(props) {
  console.log(props);
  return (
    <footer>
      <ul className="footer-info">
        {props.addresses.map((address, index) => {
          return <li key={index}>{address}</li>;
        })}
      </ul>
    </footer>
  );
}

export default Footer;
