import React from "react";

function Footer(props) {
    return (
    <div>
        <h5>Contact Details:</h5>
        <ul>
            {
                props.contactDetails.map((Name) => {
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
