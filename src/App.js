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
        src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
        href="https://www.visitlondon.com/"
        text="This is London"
      />
      <TouristInfoCards
        src="https://media.gq-magazine.co.uk/photos/5d139e8db4079f706c0c529f/3:4/w_960,h_1280,c_limit/Manchester-HP-GQ-8Mar17_istock_b.jpg"
        href="https://www.visitmanchester.com/"
        text="This is Manchester"
      />
      <TouristInfoCards
        src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe1ca7b06-b4e4-11eb-a3e9-2089e10cf05c.jpg?crop=2827%2C3533%2C1237%2C0"
        href="https://peoplemakeglasgow.com/"
        text="This is Glasgow"
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
