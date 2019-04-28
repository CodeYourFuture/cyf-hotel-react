import React from 'react';


const Footer = props => {
	console.log(props);
	return (
		<ul className="footer-contact-info">
			{props.footerData.map(name => {
				return <li key>{name}</li>;
			})}
		</ul>
	);
};

export default Footer;
