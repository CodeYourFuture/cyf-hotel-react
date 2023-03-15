const Footer = (props) => {
  return (
    <ul className="contact-container">
      {props.address.map((address, index) => {
        return (<li key={index}>{address}</li>)
      })}
    </ul>
  )
}

export default Footer;