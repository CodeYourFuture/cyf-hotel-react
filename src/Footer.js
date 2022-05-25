import React from "react";

const Footer = (props) => {
  // console.log(props.footerList);
  const list = props.footerList;
  return (
    <footer className="footer">
      <ul>
        {list.map((item, index) => (
          <li className="footer-list" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
