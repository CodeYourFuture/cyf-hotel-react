import React from "react";

function Footer(props)  {
    return (
        <ul>
            {props.details.map((data, index) => {   // chnge Details to details
                return <li key={index}>{data}</li>;
            })}
        </ul>
    );
};
export default Footer;
