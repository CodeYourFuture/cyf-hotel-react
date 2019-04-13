import React from "react";

function Footer(props)  {
    return (
        <ul>
            {props.Details.map(data => {
                return <li>{data}</li>;
            })}
        </ul>
    );
};
export default Footer;
