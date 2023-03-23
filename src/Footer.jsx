function Footer(props) {
  return (
    <ul className="footer-contact">
      {props.address.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
    </ul>
  );
}

export default Footer;
