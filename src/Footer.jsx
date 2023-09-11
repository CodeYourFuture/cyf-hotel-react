import React from "react";


const Footer = (props) => {
    const addressItems = props.addressData.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    return (
        <footer>
            <ul>
                {addressItems}
            </ul>
        </footer>
    );
}

export default Footer;
