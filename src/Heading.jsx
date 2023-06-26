import React from "react";

const Heading = () => {
    return(
        <header  className="header">
            <img 
            src="https://image.flaticon.com/icons/svg/139/139899.svg" 
            alt="Hotel logo" 
            className="logo" />
        </header>
    );
};

export default Heading;

// I start with importing the React library. I use a const variable Heading with a function arrow. Inside the body function
// I return the header and it has a className header. It contains and image. Then I export the Heading component as the 
// default export of this module. 