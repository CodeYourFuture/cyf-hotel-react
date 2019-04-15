import React from 'react'

export default function RestaurantButton(props) {
  return (
      <button onClick={props.clickHandler} className="btn btn-primary">Add</button>
    
  )
}
