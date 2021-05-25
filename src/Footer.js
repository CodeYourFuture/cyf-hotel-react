import React from "react";

const Footer = function(props) {
  return (
    <footer>
      <ul className="info-list">
        {props.hotelInfos.map((info, infoIndex) => {
          return <li key={infoIndex}>{info}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
