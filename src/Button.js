import React from 'react'
const Button = props => {
  return (
    <button className='btn btn-primary' onClick={props.addOrder}>
      {props.caption}
    </button>
  )
}
export default Button
