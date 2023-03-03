const Footer = props => {
return ( 
    <ul className="footer-contact"> 
    {props.contactDetails.map((element,index) => 
    (
       <li key={index}>{element}</li> 
       
    //  Or  <List array={footerElements} />
    ))}
    </ul>

);
};

 export default Footer;