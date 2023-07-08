import React from "react";

const FooterCompo = ({ details }) => {
  return (
    <div className="footer">
      <footer>
        <ul>
          {Object.keys(details).map((key) => {
            return <li key={key}>{details[key]}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default FooterCompo;
