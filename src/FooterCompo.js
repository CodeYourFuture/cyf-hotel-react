import React from "react";

const FooterCompo = ({ details }) => {
  return (
    <div>
      <footer>
        <ul>
          {details.map((detail,index) => {
            return <li key={index}>{detail}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default FooterCompo;
