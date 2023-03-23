function Footer(props) {
  return (
    <ul>
      {props.address.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
    </ul>
  );
}

export default Footer;
