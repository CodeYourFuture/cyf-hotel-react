import React from "react";

function Footer(props) {
  const footer = (
    <footer className="footer">
      <ul className="ul-styling">
        {props.footerArr.map((footerinfo, index) => {
          return <li key={index}>{footerinfo}</li>;
        })}
      </ul>
    </footer>
  );
  return footer;
}

export default Footer;
