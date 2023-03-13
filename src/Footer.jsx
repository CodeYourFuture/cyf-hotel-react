import React from "react";
const Footer=(props)=>{
        //console.log(props);
        return (
        <div className="footer">
        <ul>{props.info.map((name,index) => (
              <li key={index} className="removemarker">{name}</li>
            ))}
        </ul>
        </div>
        );
      };

export default Footer;