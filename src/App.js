import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";
const footerData = ['123 Fake Street, London, E1 4UD', 'hello@fakehotel.com', '0123 456789'];


class App extends Component {
  render() {
    return (
		<div className="App">
			<Heading />
			<div className="App-TouristInfoCards">
				<TouristInfoCards
					image="https://images.unsplash.com/photo-1501960986979-0a84e0e6c8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
					title="London"
					text="Capital city, elegant Arts and Crafts-era suburbs and greenbelts of common land."
					link="https://www.visitlondon.com"
				/>

				<TouristInfoCards
					image="https://images.unsplash.com/photo-1522173043602-c9fe6047c3e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
					title="Glasgow"
					text="Historical sites to take you back through time, discover vast landscapes and wildlife."
					link="https://peoplemakeglasgow.com/"
				/>
				<TouristInfoCards
					image="https://images.unsplash.com/photo-1508720666804-4253e0d846f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
					title="Manchester"
					text="Canal-woven city centres, shiny, revamped industrial areas and patches of National Park make up Great Manchester."
					link="https://www.visitmanchester.com"
				/>
			</div>
			<Bookings />
			<Restaurant /> 
			<Footer footerData={footerData} />
		</div>
	);
  }
}

export default App;
