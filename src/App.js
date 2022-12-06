import React from "react";
import Heading from "./Heading";

import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        img="https://media.istockphoto.com/id/1290738665/photo/glasgows-prestigious-park-district-aerial-view.jpg?s=612x612&w=0&k=20&c=jSEmsMNf0cro0Hkj7lpFULRwOnLt2XTcllDBkxaD33g="
        cityName="Glasgow"
        link="peoplemakeglasgow.com"
        alt="Glasgow"
      />

      <TouristInfoCards
        img="https://media.istockphoto.com/id/1356455312/photo/view-of-an-illuminated-footbridge-in-salford-quays-during-night-in-manchester-england.jpg?s=612x612&w=0&k=20&c=4wnRS1j6C9NOImzYWDkHNu3vc4WWt600kY5eKtkTftg="
        cityName="Manchester"
        link="visitmanchester.com"
        alt="Manchester"
      />

      <TouristInfoCards
        img="https://media.istockphoto.com/id/506329726/photo/street-view-of-trafalgar-square.jpg?s=612x612&w=0&k=20&c=K1BSuyf4PLL-gk0x-G9HxtnEhc2mKzhCT1ztmqU37h4="
        cityName="London"
        link="visitlondon.com"
        alt="London"
      />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;

// **Instructions:** In `src/App.js`, above the `<Bookings />` component add a new component called `TouristInfoCards` which shows 3 _cards_. A card is a common user interface pattern with an image at the top and some related text underneath. The cards must link to `peoplemakeglasgow.com`, `visitmanchester.com` and `visitlondon.com`. The cards should contain the name of the city and an image of the city. Here is an example of what an info card should look like:

// ![Info Card](InfoCard.png)

// **Hint:** Use the same className as the example below to benefit from [Bootstrap](https://getbootstrap.com/docs/4.2/components/card) library which is already imported for you in the project. Use the JSX code below as an example of one card (note that in JSX, you'll need to use `className` instead of `class`):

// ```
// <div className="card">
// 	<img src="..." className="card-img-top" />
// 	<div className="card-body">
// 		<a href="#" className="btn btn-primary">Go somewhere</a>
// 	</div>
// </div>
