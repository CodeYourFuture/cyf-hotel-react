import React from "react"

const Footer = (props) => {
    return (
        <footer className="footer">
            <ul className="address">
                {props.address.map((val) => {
                    return <li>{val}</li>
                })}
            </ul>
        </footer>
    );
}
export default Footer;