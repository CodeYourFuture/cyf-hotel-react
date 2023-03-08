import React from "react";

function Footer(props) {
    const addressInfo = props.fInfo;
    const eachInfo = addressInfo.map((item, index) =>
        <li key={index}>{item}</li>);
    
    return <ul className="footer" >{eachInfo}</ul>
    
}

export default Footer;