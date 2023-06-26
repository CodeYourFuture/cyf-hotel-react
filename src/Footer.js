import React from "react";

const Footer = ({data}) => {
    return (
        <footer className="footer bg-light">
            <ul>
                {data.map(item => (<ul key={item}>{item}</ul>))}
            </ul>
        </footer>
    );
};

export default Footer;
