import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <ul>
        {props.array.map((names) => { <li>{names}</li> })}
      </ul>
    </div>
  )
}

export default Footer;