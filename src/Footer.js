import React from "react";

function Footer(arr) {
  //   console.log(arr);
  const allInfo = arr.info;
  const eachInfo = allInfo.map((i, index) => <li key={index}>{i}</li>);

  return <ul className="footer">{eachInfo}</ul>;
}

export default Footer;
