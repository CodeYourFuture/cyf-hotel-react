import React from "react";

function Footer(props) {
  console.log(props);
  return (
    <div className="text-white bg-dark p-3">
      <ul>
        {props.footer.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
