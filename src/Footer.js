import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <ul className="footer-contact">
        {props.contactDetails.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

// This code is a React functional component called "Footer." It imports the React library and defines the Footer
//component using an arrow function syntax. The component takes in a single parameter called "props," which is an
// object that contains properties passed from the parent component. In this case, it expects a property called
// "contactDetails" which should be an array. Inside the component's return statement, there is an HTML-like syntax.
// This is called JSX (JavaScript XML) and allows you to write HTML-like code within your JavaScript. JSX is transpiled
// into regular JavaScript by tools like Babel. The return statement contains a footer element. Inside the footer,
// there is an unordered list element (ul) with a class name of "footer-contact." Within the ul element, there is a
// JavaScript expression inside curly braces: {props.contactDetails.map((element, index) => (...)}. This expression maps
// over the elements in the contactDetails array and returns a list item (li) for each element. The map function is used
// to transform each element of the array into a new element, in this case, a list item. Each list item has a unique key
// assigned using the key={index} attribute. The key is necessary to help React efficiently update the component when
// the list changes. The content of each list item is the value of the current element in the contactDetails array.
//Finally, the component is exported using the export default syntax, which allows other files to import and use the Footer
// component.
