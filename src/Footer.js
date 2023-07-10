import react from "react";

const Footer = ({ props }) => {
  return (
    <div>
      <footer>
        <ul>
          {props.map((prop) => {
            return <li key={prop}>{prop}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;