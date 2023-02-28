const Footer = (props) => {
    return(
<footer>
    <ul>
            {props.list.map( (el,index) => (
            <li key={index}>{el}</li>
            ))}
    </ul>
</footer>
    );
}
export default Footer;