import React from "react";

// style
const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
    width: "100%",
  },
};

// address
const props = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

const Footer = () => {
  return (
    <footer className="footer" style={styles.footer}>
      <ul>
        {props.map((props) => (
          <li key={props}>{props}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
