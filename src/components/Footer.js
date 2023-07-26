import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from "react-icons/fa";

function Footer() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div className="idFooter">
      <div className="footer">
        <a href="https://www.visitlondon.com/"> London.com</a>
        <a href="https://peoplemakeglasgow.com/">Glasgow.com</a>
        <a href="https://www.visitmanchester.com/">Manchester.com</a>
      </div>
      <div className="footer">
        <p> 123 Fake Street, London, E1 4UD,</p>
        <p> hello@fakehotel.com,</p>
        <p>004421345622</p>
      </div>

      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a href="#">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitterSquare />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
