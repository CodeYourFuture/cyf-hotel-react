import React from "react";

const Footer = ({data}) => {
    return (
        <footer className="footer">
            <ul>
                {data.map(item => (<ul>{item}</ul>))}
            </ul>
        </footer>
    );
};

export default Footer;
