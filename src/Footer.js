import React from "react";

function Footer (props){
        const li = props.address.map((element) => <li> {element} </li>)
        return (
        <ul className="unorderList"> {li}</ul>
    )
}

export default Footer