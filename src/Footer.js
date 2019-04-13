import React from "react"
function Footer (props) {
    return (
        <div>
            <h6>Contact Us</h6>
            <ul>
                {props.names.map(name => {return <li>{name}</li>})}
            </ul>
        </div>

    )
}
export default Footer;