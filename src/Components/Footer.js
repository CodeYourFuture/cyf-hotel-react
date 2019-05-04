import React from 'react';
import './App.css'

const Footer = (props) => {
    return (
        <div className="footer">
            <ul >
                {props.footerData.map((data, index) => {
                    return <li key={index}>{data}</li>
                })

                }
            </ul>
        </div>
    )
};

export default Footer;