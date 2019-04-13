import React from "react";

function Footer(props) {
    return (
    <div>
        <h5>Communication:</h5>
        <ul>
            {
                props.Communication.map((Name) => {
                    return (
                        <li> {Name}</li>
                    )
                })
            }
        </ul>  
    </div>

        );
}

export default Footer;
