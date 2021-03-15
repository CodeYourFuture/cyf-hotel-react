import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.footer.map(fake => (
          <li>{fake}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
