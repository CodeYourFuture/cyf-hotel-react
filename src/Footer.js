import React from "react";

function Footer(props) {
  let footerProps = props.props;
  console.log(props);
  console.log(footerProps);
  return (
    <>
      <ul className="row justify-content-center">
        {footerProps.map((prop, index) => (
          <li key={index} className="footer-list-item">
            {prop}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Footer;
