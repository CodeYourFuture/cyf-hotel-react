import React from "react";

const Footer = (props)  => (
    <div>
        <ul>
            {props.footer.map(element => (
                <li>{element}</li>
            ))}
        </ul>
    </div>
);

export default Footer;
