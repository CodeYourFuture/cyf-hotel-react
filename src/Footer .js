import React from "react";

const Footer = props => {
  return (
    <div className="footer-app">
      <ul>
        {props.footer.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul>
      <a href="https://github.com/MariAzhdari">Marziyeh Azhdari</a>
    </div>
  );
};

export default Footer;
