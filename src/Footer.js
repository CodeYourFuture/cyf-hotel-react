import React from "react";

function Footer(arr) {
  //   console.log(arr);
  const allInfo = arr.info;
  const eachInfo = allInfo.map((i, index) => <li key={index}>{i}</li>);

  return (
    <div>
      <ul className="footer">{eachInfo}</ul>
      <p>Created by Andriana</p>
      <a href="https://github.com/AndrianaOS/cyf-hotel-react">Link to GitHub</a>
    </div>
  );
}

export default Footer;
