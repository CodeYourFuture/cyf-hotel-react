import React from "react";

const Footer = ({ contact }) => {
  //   console.log(footer);
  return (
    <ul style={AppFooter}>
      {contact.map((data, index) => {
        // console.log(data);
        return <li key={index}>{data}</li>;
      })}
    </ul>
  );
};

const AppFooter = {
  backgroundColor: "#222",
  height: "100px",
  padding: "20px",
  color: "white",
  textAlign: "center",
  fontFamily: "Arial, Helvetica, sans-serif",
  fonSize: "1em",
  fontWeight: "bold",
  listStyleType: "none",
  marginBottom: "0"
};

export default Footer;
