import React from "react";
function Footer({ footerAddress }) {
  return (
    <footer>
      <ul>
        {footerAddress.map((line, i) => (
          <li key={i} style={{ listStyle: "none" }}>
            {" "}
            {line}{" "}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
