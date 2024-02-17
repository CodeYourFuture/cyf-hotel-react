import React from "react";

const ContactDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              {ContactDetails.map((contact, id) => (
                <li key={id}>{contact}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            {/* <h5>Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/rooms">Rooms</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul> */}
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>
              &copy; {new Date().getFullYear()} Andrius Isin. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
