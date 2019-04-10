import React from "react";

const Footer = props => {

  
  return (
    <div className="footer">
      <ul>
        {props.footerArray.map((footerItems, index) => (
            
          <li key={index}>{footerItems}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default Footer;
