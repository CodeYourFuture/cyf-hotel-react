import React from 'react';

const Footer = (props) => {
    return (
        <div className = "footer">
           <ul>
            {props.address.map((address) => (<li key={address}>{address}</li>))}
           </ul> 
        </div>
    );
};

export default Footer;