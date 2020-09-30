import React from "react";
const cssStyle = {
  listStyleType: "none",
  fontStyle: "italic",
  fontSize: "18px",
  width: "100%",
  display: "flex",
  justifyContent: "center"
};

function Footer(prop) {
  return (
    <div className="footer">
      <hr />
      <ul style={cssStyle}>
        {prop.add.map(function(name, index) {
          console.log(<li key={index}>{name}</li>);
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
}
export default Footer;
