import React from "react";

const Footer = props => (
    <footer>
        <p>Contact Us By </p>
        <ul>
            {props.contacts.map((contact, i) => (
            <li key={i}>{contact}</li>
            ))}
        </ul>
    </footer>
);

export default Footer;