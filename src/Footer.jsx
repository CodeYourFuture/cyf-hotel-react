import React from "react";

const Footer = (props) => {
  // console.log(props);
  return (
    <footer>
      <p className="contact-us-footer">Contact us:</p>
      <div className="container-contact-details">
        <ul className="contact-details">
          {props.props.map((prop) => (
            <li key={prop}>{prop}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
