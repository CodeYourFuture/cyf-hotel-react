import React from "react";

const Footer = () => {

const myProps = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
return(
    <div className="footer">
        <ul className="ul">
            {myProps.map((item, index) => <li key={index}>{item}</li>
        )}
        </ul> 
    </div>
)


}
export default Footer;