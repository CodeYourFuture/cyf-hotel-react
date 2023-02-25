import React from "react";

const Footer = props => {
    return (
        <div>
            <ul>
                {props.footer.map(element => 
                <li>{element}</li>)
                }
            </ul>
        </div>
    );
};

export default Footer;