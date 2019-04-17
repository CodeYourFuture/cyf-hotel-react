import React from "react"
function Footer (props) {
    return (
        <div>
            <h6>Contact Us</h6>
            <ul>
                {props.footerInfo.map(footerInfo => {return <li>{footerInfo}</li>})}
            </ul>
        </div>

    )
}
export default Footer;