import React from "react";

const Footer = () => {

    const contactInfo = [
    "123 Fake Street, London, E14UD",
    "hello@fakehotel.com",
    "0123 456789",
];// contact info 
        return (
        <div className="the-contact">
        <ul>
       {contactInfo.map((item) =>
       (<li>
        {item}
       </li>))
    }
    <li>
        <span>{contactInfo}</span>
    </li>
        </ul>
        </div>
    );
   
};

export default Footer;