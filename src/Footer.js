import React from "react";

const Footer = () => {

const myProps = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
return(
    <div className="footer">
        <ul>
        {myProps.map((footer, index) => {
          <li key={index}>{footer}</li>
        })}
        </ul>
    </div>
)


}
export default Footer;