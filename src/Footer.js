import React from "react";

const Footer = props => {
  //function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <ul className="ul">
          {props.address.map((element, index) => (
            <li className="li" key={index}>
              {element}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
