import React from "react";

const Footer = (props) => {
    function createLi (line, ix) {
        return <li key={ix} >{line}</li>
    }
    return (
        <div>
            <ul>{props.contactDetails.map ( createLi ) }
            </ul>
        </div>
    ) 


};
export default Footer;

//this is the function, line is the element of the array, i am mapping to wrap each line in a li.
//props has a key called contact details which is an array that has been passed into the footer component. 

//<ul>{props.contactDetails.map ( line => <li>{line}</li> ) }