import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const cards= [
        {image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgo-eat-do.com%2Fwp-content%2Fuploads%2F2014%2F09%2FGED-Glasgow-1.jpg&f=1&nofb=1&ipt=78af7b2087d572c1f62b808c15938b1a5e257459c2eb09e3fa90b941e4cb1c26&ipo=images",
        name: "Glasgow", 
        url:"https://peoplemakeglasgow.com",
        description: "Glasgow is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe. In 2020, it had an estimated population of 635,640. The city was made a county of itself in 1893, prior to which it had been in the historic county of Lanarkshire.",
        },
        { image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tlh.ch%2Fimages%2Fdestinations%2Fuk%2Fmanchester%2Fgeneral%2Ffull.jpg&f=1&nofb=1&ipt=a40c484e6031ad4fb5f530669ea5f513f5d4e4947af16e08fc0621376a8ec8e6&ipo=images",
          name: "Manchester", 
          url:"https://www.visitmanchester.com",
        description: "Manchester is a city in Greater Manchester, England. It had a population of 552,000 in the 2021 United Kingdom census. It is bordered by the Cheshire Plain to the south, the Pennines to the north and east, and the neighbouring city of Salford to the west.",
        }, 
        { image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fourescapades.com%2Fwp-content%2Fuploads%2F2014%2F07%2FOur-Escapades-London-Eye-Sunset.jpg&f=1&nofb=1&ipt=8a0ed5d6abd9db5c881fd8b78351c60d3a1befac07f03b8c44d448d51a39c2ea&ipo=images",
           name: "London",
           url: "https://visitlondon.com", 
        description: "London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in south-east England at the head of a 50-mile estuary down to the North Sea, and has been a major settlement for two millennia",
        } 
      ];
  const info = [ "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards card={cards}/>
      <Bookings />
      <Footer fInfo={info} />
    </div>
  );
};

export default App;
