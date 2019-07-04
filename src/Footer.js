import React from 'react';

const Footer = (props) => {
        const businessInfo = props.businessInfo;
        const details = businessInfo.map((d) => <li key={d.toString()}>{d}</li>);
        return(
        <ul>{details}</ul>
        )
    
}

export default Footer;