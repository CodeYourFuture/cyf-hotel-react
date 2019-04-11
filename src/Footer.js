import React from 'react'
const Footer = prop => {
  return (
    <ul>
      {prop.value.map((addressLine, index) => {
        return <li key={index}>{addressLine}</li>
      })}
    </ul>
  )
}
export default Footer
