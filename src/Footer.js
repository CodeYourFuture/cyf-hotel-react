import React from "react";
import "./App.css";

class Footer extends React.Component {
  render() {
    const personalInfo = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789"
    ];
    return (
      <div className="footer">
        <ul>
          {personalInfo.map(info => (
            <li>{info}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Footer;
