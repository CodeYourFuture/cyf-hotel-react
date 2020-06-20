import React from "react";

const arrAddress = [
  {
    address: "123 Fake Street, London, E1 4UD",
    email: "hello@fakehotel.com",
    tel: "0123 456789"
  }
];

function Footer() {
  return (
    <footer className="footer">
      {arrAddress.map((addressObj, index) => {
        return (
          <ul key={index}>
            <li>{addressObj.address}</li>
            <li>{addressObj.email}</li>
            <li>{addressObj.tel}</li>
          </ul>
        );
      })}
    </footer>
  );
}

export default Footer;
