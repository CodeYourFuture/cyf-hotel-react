import React from "react";

const FooterInfo = (props) => {
   return (
      <ul className="unorder-List">
        {props.footerMes.map((item,index)=>
          (<li key={index}>{item}</li>)
          )}
      </ul>
     );
};

export default FooterInfo;