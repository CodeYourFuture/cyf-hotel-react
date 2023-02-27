import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <div>
        <p>2023 Fake Hotel | Design By Olena Reukova</p>
        <ul>
          {props.address.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
