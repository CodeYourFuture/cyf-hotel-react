
import React, { Component } from "react";
import "./App.css";
import Heading from "./Heading";
import TouristsInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
const glasgowInfo = ['https://www.whatsonnetwork.co.uk/uploads/800x600/c66a3c7e9715a4e542ffbcf1696127a0.jpg', 'glasgow-img', 'Glasgow', 'Fun things to do in Glasgow', 'https://www.peoplemakeglasgow.com'];
const manchesterInfo = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyByYyaLocYGr2ao1pLGDLHt1i653-RqT49cItIgKBqZicNNOs0g', 'manchester-img', 'Manchester', 'Lovely places to visit in Manchester', 'https://www.visitmanchester.com'];
const londonInfo = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZnqGAb0KkGpQKScGyMwYyTZJgsUv7CDP9T3xPt6LCRXyHPWYYw', 'london-img', 'London', 'Great places to visit in London', 'https://www.visilondon.com'];



const footerContent = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <TouristsInfoCards image = {glasgowInfo[0]} altText = {glasgowInfo[1]} city = {glasgowInfo[2]} mainText= {glasgowInfo[3]}  website = {glasgowInfo[4]}/>
        <TouristsInfoCards image = {manchesterInfo[0]} altText = {manchesterInfo[1]} city = {manchesterInfo[2]} mainText= {manchesterInfo[3]}  website = {manchesterInfo[4]}/>
        <TouristsInfoCards image = {londonInfo[0]} altText = {londonInfo[1]} city = {londonInfo[2]} mainText= {londonInfo[3]}  website = {londonInfo[4]}/>
        <Bookings />
        <Restaurant />
        <Footer names = {footerContent} />
        
      </div>
    );
  }
}

export default App;


