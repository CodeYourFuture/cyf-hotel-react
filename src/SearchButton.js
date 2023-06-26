import React from "react";

const searchButton = () => {
    return <button className="btn btn-primary">Search</button> 
}

export default searchButton;

// I start with import React from "react"; It imports the React library, which is necessary for 
// creating and working with React. I use a const variable and assigns it an arrow function. Next line
// is the body of the arrow function. It returns a JSX element, which represents the search button. 
// it creates a button element with the class name "btn btn-primary" and the text "Search" inside 
// the button. The default keyword means that when another module imports from this module, they will 
// receive the SearchButton component by default, without needing to specify its name.