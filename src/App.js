
import React, { Component } from "react";
import "./App.css";
import Heading from "./Heading";
import TouristsInfoCard from "./TouristInfoCard";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

const glasgowInfo = {
  image: 'https://www.whatsonnetwork.co.uk/uploads/800x600/c66a3c7e9715a4e542ffbcf1696127a0.jpg',
  altText: 'glasgow-img',
  city: 'Glasgow',
  mainText: 'Fun things to do in Glasgow',
  website: 'https://www.peoplemakeglasgow.com'
}

const manchesterInfo = {
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyByYyaLocYGr2ao1pLGDLHt1i653-RqT49cItIgKBqZicNNOs0g',
altText: 'manchester-img', 
city: 'Manchester', 
mainText: 'Lovely places to visit in Manchester', 
website: 'https://www.visitmanchester.com'
}

const londonInfo = {
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZnqGAb0KkGpQKScGyMwYyTZJgsUv7CDP9T3xPt6LCRXyHPWYYw',
  altText: 'london-img', 
  city:'London', 
  mainText:'Great places to visit in London', 
  website: 'https://www.visilondon.com'
}

const footerContent = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <div className= "cardrow">
        <TouristsInfoCard image= {glasgowInfo.image} altText= {glasgowInfo.altText} city= {glasgowInfo.city} mainText= {glasgowInfo.mainText}  website= {glasgowInfo.website}/>
        <TouristsInfoCard image= {manchesterInfo.image} altText= {manchesterInfo.altText} city= {manchesterInfo.city} mainText= {manchesterInfo.mainText}  website= {manchesterInfo.website}/>
        <TouristsInfoCard image= {londonInfo.image} altText= {londonInfo.altText} city= {londonInfo.city} mainText= {londonInfo.mainText}  website= {londonInfo.website}/>
       </div>
        <Bookings />
        <Restaurant />
        <Footer footerInfo = {footerContent} />
        
      </div>
    );
  }
}

export default App;


