import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";

function Bookings() {
	const [bookings, setBookings] = useState(FakeBookings);
 
	return (
		<div className="App-content">
			<div className="container">
				<Search />
				<SearchResults results={bookings} />
			</div>
		</div>
	);
};

export default Bookings;
//<SearchResults results={FakeBookings} />
