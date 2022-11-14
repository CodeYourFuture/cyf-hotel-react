import React from "react";

const Footer = ({props}) =>
{
    return(
        <footer>
            <ul>
                {props.map((element) =>
                (
                    <li>{element}</li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer;