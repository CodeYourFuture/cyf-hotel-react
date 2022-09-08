import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div>
        <h2>CYF HOTEL</h2>
        {props.footer.map((info, i) => (
          <div className="footer-info" key={i}>
            {info}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
