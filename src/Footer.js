import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.footer.map(footerItem => {
        return (
          <div className="footerItem" key={footerItem.length}>
            <li>{footerItem}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default Footer;
