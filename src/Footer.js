import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div>
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
