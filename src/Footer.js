import React from "react";

function Footer(arr) {
  //   console.log(arr);
  const allInfo = arr.info;
  const eachInfo = allInfo.map((i, index) => <li key={index}>{i}</li>);

  return (
    <div className="footer">
      <ul>
        {eachInfo}
        <p>Created by Andriana</p>
        <a href="https://github.com/AndrianaOS/cyf-hotel-react">
          Link to GitHub
        </a>
      </ul>
    </div>
  );
}

export default Footer;
