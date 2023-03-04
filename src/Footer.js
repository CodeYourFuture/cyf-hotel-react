const Footer = (prop) => {
  return (
    <ul className="contact-container">
      {prop.address.map((address, index) => {
        return (<li key={index}>{address}</li>)
      })}
    </ul>
  )
}

export default Footer;