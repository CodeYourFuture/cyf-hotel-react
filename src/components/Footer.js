import React from "react";

const Footer = ({ hotelContactInfo }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 footer">
          <ul
            className="list-inline text-center"
            style={{ listStyleType: "none" }}
          >
            {hotelContactInfo.map((item, index) => {
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
