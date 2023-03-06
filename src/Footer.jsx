import React from "react";
const Footer=(props)=>{
        //console.log(props);
        return (
        <div className="footer">
        <ul>{props.props.map((name) => (
              <li key="{name}" className="removemarker">{name}</li>
            ))}
        </ul>
        </div>
        );
      };

export default Footer;