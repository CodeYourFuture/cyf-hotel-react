const FooterElement = [
    {address: "123 Fake Street, London, E1 4UD", email: "hello@fakehotel.com", phoneNumber: "0123 456789",}
];

function Footer(FooterElement) {
  return (
    <>
      <ul>
        <li>{FooterElement.address}</li>
        <li>{FooterElement.email}</li>
        <li>{FooterElement.phoneNumber}</li>
      </ul>
    </>
  );
}


export default Footer;