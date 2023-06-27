import React from "react";

const Button = ({orderOne}) => {
  
  return (
    
          <button onClick={orderOne} className="btn btn-primary">
            Add
          </button>
          
  );
};

export default Button;
