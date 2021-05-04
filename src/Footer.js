import React from "react";

/*footer Component */
const Footer = props => {
  return (
    <div>
      <ul className="footer">
        {props.Address.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
        {/* loops through the address props return the element in <tag> JSX  remember to use curly brackets to wrap the props and element element to work */}
      </ul>
    </div>
  );
};

export default Footer;
