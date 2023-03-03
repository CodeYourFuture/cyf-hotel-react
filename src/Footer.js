

const FooterChild = (props) => {

  return (
    <footer>
        <ul>
            {props.list.map( (el,index) => (
            <li key={index}>{el}</li>
            ))}
        </ul>
    </footer>

  );
}



const Footer = () => {
    const footerArray = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

    return(
            <FooterChild list = {footerArray} />
    );
}
export default Footer;

