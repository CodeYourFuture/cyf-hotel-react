import React from 'react';


const Footer = (props) => {
    return (
        <ul>
            {props.footerData.map((data, index) => {
                return <li key={index}>{data}</li>
            })

            }
        </ul>
    )
};

export default Footer;