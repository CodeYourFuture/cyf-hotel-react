import React from 'react';


  const Button=(props)=> { 
    let className= "btn btn-primary fn-submit-name";

    if(props.isPrimary=== true){
      className= "btn btn-primary fn-submit-name";
    } else {
      className= "btn btn-secondary fn-submit-name";
    }

  
    return(
      <button className={className}>{props.displayText}</button>
    )}

export default Button;
