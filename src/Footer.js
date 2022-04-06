import React from "react";


const Footer = (props) => {
  console.log(props);
  return (
    <div id="footer" className="bg bg-info">
      <p className="text-info mt-5 ml-4">How to Find Us: </p>
      <ul>
        {props.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
