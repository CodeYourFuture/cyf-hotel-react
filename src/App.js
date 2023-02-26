import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  const cards= [
        {image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcurlytraveler.com%2Fwp-content%2Fuploads%2F2020%2F07%2F8_2074501134454398217_n.jpg&f=1&nofb=1&ipt=17cdb4bedb67a884c88b2d745ec97957f1d3f791c9ea7e07b5bb6751e5ccefeb&ipo=images",
        name: "Glasgow", 
        description: "Glasgow is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe. In 2020, it had an estimated population of 635,640. The city was made a county of itself in 1893, prior to which it had been in the historic county of Lanarkshire.",
        },
        { image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcurlytraveler.com%2Fwp-content%2Fuploads%2F2020%2F07%2F8_2074501134454398217_n.jpg&f=1&nofb=1&ipt=17cdb4bedb67a884c88b2d745ec97957f1d3f791c9ea7e07b5bb6751e5ccefeb&ipo=images",
          name: "Glasgow", 
        description: "Glasgow is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe. In 2020, it had an estimated population of 635,640. The city was made a county of itself in 1893, prior to which it had been in the historic county of Lanarkshire.",
        }, 
        { image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcurlytraveler.com%2Fwp-content%2Fuploads%2F2020%2F07%2F8_2074501134454398217_n.jpg&f=1&nofb=1&ipt=17cdb4bedb67a884c88b2d745ec97957f1d3f791c9ea7e07b5bb6751e5ccefeb&ipo=images",
           name: "Glasgow", 
        description: "Glasgow is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe. In 2020, it had an estimated population of 635,640. The city was made a county of itself in 1893, prior to which it had been in the historic county of Lanarkshire.",
        } 
      ];

  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards card={cards}/>
    </div>
  );
};

export default App;
