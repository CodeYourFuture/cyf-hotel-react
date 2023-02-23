import React from "react";

const Footer = () => {
  return (
    <div>
      <FooterDetail
        details={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

function FooterDetail(props) {
  const footerDetail = (
    <ul>
      {props.details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  );
  return <footer>{footerDetail}</footer>;
}

export default Footer;
