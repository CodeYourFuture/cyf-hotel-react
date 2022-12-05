import React from "react";

const FooterData = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

function Footer() {
  return (
    <div>
      <ul>
        {FooterData.map((item, index) => {
          return (
            <li className="footer" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Footer;
