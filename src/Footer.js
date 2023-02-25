const Footer = props => (
  <ul className="footer">
    {props.arr.map((eachItem, index) => (
      <li>{eachItem}</li>
    ))}
  </ul>
);

export default Footer;
