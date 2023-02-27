import React from "react";
const Footer=(props)=>{
        //console.log(props);
        return (
        <div>
        <ul>{props.props.map((name) => (
              <li key="{name}">{name}</li>
            ))}
        </ul>
        </div>
        );
      };

export default Footer;