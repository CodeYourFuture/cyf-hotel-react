import React from 'react';

const Footer = (props) => {
        const details = props.map((d) => <li>{d}</li>)
        return(
        <div>
        <ul>{details}</ul>
        </div>
        )
    
}

export default Footer;