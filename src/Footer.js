import React from "react";

const Footer = function (props) {
    const array = props.array;
    const footerItems = array.map(item =>
        <li>{item}</li>
    );
    return (
        <ul>{footerItems}</ul>
    )
};
export default Footer;