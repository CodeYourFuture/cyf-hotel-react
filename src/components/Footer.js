import React from "react";

const Footer = ({ arrayInfo }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="list-inline" style={{ listStyleType: "none" }}>
            {arrayInfo.map((item, index) => {
              return (
                /*the key must be unique for efficiency purpose*/
                <li className="list-inline-item" key={index + item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
