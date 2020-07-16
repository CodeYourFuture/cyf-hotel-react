import React from "react";

function Footer(props) {
  const footer = (
    <footer>
      {props.footerArr.map(footerinfo => {
        return (
          <ul>
            <li>{footerinfo}</li>
          </ul>
        );
      })}
    </footer>
  );
  return footer;
}

export default Footer;
