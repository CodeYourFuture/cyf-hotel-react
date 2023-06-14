import React from "react";
debugger;
function Footer(props) {
    console.log(props);
   return(
    
    <div>
         <ul>
          {
            props.address.map((data, index)=>{
                return (
                  <div>
                    <li key={index} style={{listStyle:"none"}}>{data}</li>
                  </div>
                );
            })
          }
        </ul>
    </div>
   ) 
}
export default Footer;