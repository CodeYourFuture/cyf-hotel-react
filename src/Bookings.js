import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

function Bookings() {
	const [bookings, setBookings] = useState([]);
	const [dataLoaded, setDataLoaded] = useState(false);
	const [fetchingError, setFetchingError] = useState(false);

	const search = (searchVal) => {
		const searchResult = bookings.filter(
			(client) =>
				client.firstName.toLowerCase() === searchVal.toLowerCase() ||
				client.surname.toLowerCase() === searchVal.toLowerCase()
		);

		setBookings(searchResult);
	};

	useEffect(() => {
		//cyf-react.glitch.me/error

		fetch(`https://cyf-react.glitch.me/delayed`)
			.then((res) => res.json())
			.then((data) => {
				setBookings(data);
				if (data.length > 0) {
					setDataLoaded(true);
				}
			})
			.catch((error) => setFetchingError(true));
	}, []);

	if (fetchingError) {
		return (
			<h3
				style={{ textAlign: "center", backgroundColor: "blue", color: "white" }}
			>
				Internal Server Error 500
			</h3>
		);
	} else if (dataLoaded) {
		return (
			<div className="App-content">
				<div className="container">
					<Search currentSearch={search} />
					<SearchResults results={bookings} />
				</div>
			</div>
		);
	} else {
		return (
			<h3
				style={{ textAlign: "center", backgroundColor: "blue", color: "white" }}
			>
				Loading data....
			</h3>
		);
	}
}

export default Bookings;
