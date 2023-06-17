import React from "react";

const Footer = (props) => {
    const { addresses } = props;

    return (
<footer className="footer">
<ul className="footer-list">
    {addresses.map((address, index) => (
        <li key={index}>{address}</li>
    ))}
    </ul>
    </footer>
    );
};

export default Footer;