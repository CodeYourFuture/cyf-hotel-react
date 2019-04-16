import React from "react";

function Footer(props)  {
    return (
        <ul>
            {props.details.map(data => {   // chnge Details to details
                return <li>{data}</li>;
            })}
        </ul>
    );
};
export default Footer;
