import React from 'react'
const Button =  function(props){
    // console.log(props)
    return <button onClick={props.onClick}className="btn btn-primary fn-submit-name">{props.text}</button>

}

export default Button