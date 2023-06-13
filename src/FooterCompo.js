import React from "react";

const FooterCompo = ({ details }) => {
  return (
    <div>
      <footer>
        <ul>
          {details.map((detail) => {
            return <li key={detail}>{detail}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default FooterCompo;
