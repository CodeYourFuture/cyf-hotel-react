import React from "react";

function Footer({ data }) {
  return (
    <ul className="footer">
      {data.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
export default Footer;
