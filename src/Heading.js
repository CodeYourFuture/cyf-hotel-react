// import React from "react";
// import hotel-logo from ".images/hotel.png";

// const Heading = () => {
//   return (
//     <header className="App-header">
//       <h1 className="logo-title">CYF Hotel</h1>
//       <img
//         className="logo-hotel"
//         // src="../images/hotel-logo.svg"
//         src="../images/hotel-logo.png"
//         alt="Hotel Logo"
//       />
//     </header>
//   );
// };

// export default Heading;

import React from "react";
import logo from "./images/hotel.png";

const Heading = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="hotel" />
      CYF Hotel
    </header>
  );
};

export default Heading;

// The import React from "react"; statement imports the React library, which is necessary to define and use React components.
// The const Heading = () => { ... } syntax defines a functional component called Heading. Functional components are
// stateless and don't have their own internal state. They receive props as input and return JSX (JavaScript XML) to describe
// the component's structure and content. The component's return statement begins with a <header> element, which represents
// the header section of the webpage. Inside the <header> element, there is an element with the className "App-header".
// This class can be used for styling purposes and is likely defined in a CSS file or a CSS-in-JS solution like
// styled-components. Within the <header> element, there is an <h1> element with the className "logo-title". This is the
// main heading of the hotel website, displaying the text "CYF Hotel". The class "logo-title" can be used to style this
// heading element. Following the <h1> element, there is an <img> element with the className "logo-hotel". This image
// represents the hotel's logo. The src attribute points to the location of the logo image file, which is "../images/hotel-logo.svg"
// relative to the current file. The alt attribute specifies alternative text to be displayed if the image fails to load.
// Finally, the component is exported as the default export using the export default Heading; statement. This allows
// other files to import and use this component as needed.
