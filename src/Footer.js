const Footer = props => (
  <ul className="footer">
    {props.arr.map((eachItem, index) => (
      <li key={index}>{eachItem}</li>
    ))}
  </ul>
);

export default Footer;
