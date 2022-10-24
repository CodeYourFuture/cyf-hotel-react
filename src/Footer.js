import React from 'react'




const Footer = () => {
  let names = ["123 Fake Street", "London, E1 4UD", "hello@fakehotel.com", "0123 456789"]
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Footer;