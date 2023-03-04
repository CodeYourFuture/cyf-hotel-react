const Footer = ({ address, email, phone }) => (
  <ul className="footer">
    <li key={address}>{address}</li>
    <li key={email}>{email}</li>
    <li key={phone}>{phone}</li>
  </ul>
);

export default Footer;
