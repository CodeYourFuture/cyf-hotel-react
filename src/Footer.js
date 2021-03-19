import React from "react";
function Footer() {
  const foot = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul>
        {foot.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Footer;
