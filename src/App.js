import React from "react";

import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        img="https://media.istockphoto.com/id/1205363274/photo/wide-angle-aerial-view-of-the-river-clyde-and-landmarks-glasgow-scotland-uk.jpg?b=1&s=612x612&w=0&k=20&c=tNJwoax0ZtLmexUN7PS0kTGfU7Ni2RF6gRLiu-Gfwp8="
        city="Glasgow"
        content="About city"
        link="https://peoplemakeglasgow.com"
      />
      <TouristInfoCards
        img="https://media.istockphoto.com/id/946961992/photo/manchester-england.jpg?b=1&s=612x612&w=0&k=20&c=LAkHyf8zLUCQgDYqpZOWIlnlX310a83how5i1PffosA="
        city="Manchester"
        content="About city"
        link="https://visitmanchester.com"
      />
      <TouristInfoCards
        img="https://media.istockphoto.com/id/1265900812/photo/aerial-view-of-london-and-the-tower-bridge.jpg?s=612x612&w=0&k=20&c=-2j6QgZyeveMcGzuWmgLYqC7zXTkcSBnayuZsDqs5KQ="
        city="London"
        content="About city"
        link="https://visitlondon.com"
      />
      <Bookings />
      <Footer
        list={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
