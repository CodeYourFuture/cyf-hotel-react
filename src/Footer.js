import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-sm-4">
          <ul>
            {props.footerCompInfo.map((name, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </div>
        <div className="col-sm-4">
          <p>
            By: <hr /> Abdullah Celen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
