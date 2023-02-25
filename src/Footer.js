import react from "react";

const Footer = (prop) => {
  return (
    <ul class="contact-container">
      {prop.address.map((address) => {
        return (<li>{address}</li>)
      })}
    </ul>
  )
}

export default Footer;