import React from "react";
import Top from "./Top";
import Heading from "./Heading";
import Bookings from "./Bookings";
import InfoCard from "./InfoCard";
import "./App.css";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  const contactDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];

  return (
    <div className="App">
      <Top />
      <Heading />
      <InfoCard />
      <Bookings />
      <Restaurant />
      <Footer contactDetails={contactDetails} />
    </div>
  );
};

export default App;

// Pseudocode: React component called "App". It imports several other components, such as "Heading", "Bookings",
// "TouristInfoCards", "Footer", and "Restaurant". It also imports a CSS file called "App.css" for styling. The App
// component is a functional component written using arrow function syntax. It returns JSX (JavaScript XML), which
// represents the structure and content of the component's rendered output.

// Inside the App component, there is a constant variable contactDetails that holds an array of contact information.
// The array contains a street address, email address, and phone number. The JSX code returned by the App component
// represents the structure of the web page. It consists of a <div> element with the class name "App". Inside the <div>,
// the imported components are rendered in order: <Top />, <Heading />, <TouristInfoCards />, <Bookings />, <Restaurant />, and
// <Footer />. The <Footer /> component is passed the contactDetails array as a prop. The export default App; statement
// exports the App component as the default export of this module, allowing it to be imported and used in other parts of
// the application.
