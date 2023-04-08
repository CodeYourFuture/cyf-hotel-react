import { List } from "./List";

const footerElements = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <div>
      <div className="App-footer-logo">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/187/187879.png"
        />
        <p className="hotel-name">CYF Hotel</p>
      </div>
      <List item={footerElements} />
    </div>
  );
};

export default Footer;
