
import React from "react";

const TextInput = props =>(
<input
          id={props.id}
          type="text"
          className="form-control"
          placeholder={props.message}
          name={props.name}
          NumberOfDays={props.NumberOfDays}
          checkBox={props.checkBox}

        />
);        
export default TextInput;



