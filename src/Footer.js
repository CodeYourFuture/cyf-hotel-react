import React from 'react'
const Footer = prop => {
  return (
    <ul className='footer'>
      {prop.value.map((addressLine, index) => {
        return <li key={index}>{addressLine}</li>
      })}
    </ul>
  )
}
export default Footer
