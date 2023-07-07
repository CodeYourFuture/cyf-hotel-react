const ContactDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];
const Footer = () => {
  return (
    <div>
      <ul className="Footer">
        {ContactDetails.map((contact, id) => (
          <li key={id}>{contact}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
