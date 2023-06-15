import React from "react";

const Footer = ({newProps}) => {
    return (
    <ul className="footer-list">
        {newProps.array.map((element, index) => (
        <li key={index}>{element}</li>
        ))}
    </ul>
    );
};

export default Footer;