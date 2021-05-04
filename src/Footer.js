import React from "react";

function Footer() {
	const footerInfo = [
		"123 Fake Street, London, E1 4UD",
		"hello@fakehotel.com",
		"0123 456789",
	];
    const listItems = footerInfo.map((info,index)=> <li className="listItem" key={index}>{info}</li>);
    
    {
			
		}
	return (
		<ul className="list-group" id="footer">
			{listItems}
		</ul>
	);
}

export default Footer;
