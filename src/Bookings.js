import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Search from "./Search.js";
import OutcomeSearch from "./OutcomeSearch.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorOccurred, setErrorOccurred] = useState({
    ok: true,
    status: "",
    statusText: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cyf-react.glitch.me");
        if (!response.ok) {
          setErrorOccurred({
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
          });
          throw new Error(response);
        }
        const data = await response.json();
        setBookings(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const search = (searchVal) => {
    if (searchVal.trim() === "") {
      setBookings(data);
    } else {
      const filterBookings = bookings.filter((element) => {
        return (
          element.firstName.toLowerCase().startsWith(searchVal.toLowerCase()) ||
          element.surname.toLowerCase().startsWith(searchVal.toLowerCase())
        );
      });
      setBookings(filterBookings);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!errorOccurred.ok ? (
          <div className="loader">
            <span>
              An Error occurred when fetching the Bookings Data :{" "}
              {errorOccurred.status} {errorOccurred.statusText}
            </span>
          </div>
        ) : isLoading ? (
          <div>
            <ClipLoader color={"green"} size={70} />
            <span>Loading, please wait...</span>
          </div>
        ) : (
          <OutcomeSearch results={bookings} setCustomerId={setCustomerId} />
        )}
        {customerId && <CustomerProfile id={customerId} />}
      </div>
    </div>
  );
};

export default Bookings;

// It is a React component named "Bookings" that fetches and displays booking data. The component imports necessary
// dependencies: React, useEffect and useState hooks from React, and several other components (ClipLoader, Search,
// OutcomeSearch, CustomerProfile) from specific files. The Bookings component is defined as a functional component
// using an arrow function. The code initializes several state variables using the useState hook.

// bookings is an array that holds the booking data fetched from the server.
// customerId represents the ID of a selected customer.
// data is a copy of the original booking data.
// isLoading is a boolean flag indicating whether the data is currently being fetched (true) or has finished loading
// (false).
// errorOccurred is an object that tracks whether an error occurred during the data fetch. It contains properties like
// ok (a boolean indicating if the response was successful), status (HTTP status code), and statusText (HTTP status
// message).

// The useEffect hook is used to perform side effects in a functional component. In this case, it fetches the booking
// data from the server when the component mounts (empty dependency array []). It defines an async function fetchData
// that sends an HTTP GET request to the URL "https://cyf-react.glitch.me". If the response is not successful (!response.ok),
// it sets the errorOccurred state accordingly and throws an error. Otherwise, it parses the response data and sets both
// bookings and data state variables with the fetched data. Finally, it sets isLoading to false to indicate that the
// data has finished loading. If an error occurs during the fetch or parsing, it is logged to the console.

// Search function is responsible for handling the search functionality. It receives a searchVal parameter representing
// the search input value. If the trimmed search value is empty, it sets bookings state to the original data array,
// effectively resetting the search. Otherwise, it filters the bookings array based on whether the firstName or surname
// properties of each element start with the search value (case-insensitive). The filtered results are then set as the
// new bookings state.

// Render:
// The code within the return statement represents the JSX markup that will be rendered by this component.
// <div className="App-content">: A container for the component's content.
// <div className="container">: A container for the booking-related content.
// <Search search={search} />: Renders the Search component and passes the search function as a prop.
// Conditional rendering based on error and loading states:
// If errorOccurred.ok is false, render an error message.
// If isLoading is true, render a loading spinner and a "Loading, please wait..." message.
// If neither of the above conditions is met, render the OutcomeSearch component and pass the bookings array and setCustomerId function as props.
// {customerId && <CustomerProfile id={customerId} />}: Conditional rendering of the CustomerProfile component based on the customerId state variable. If customerId is truthy, render the component and pass customerId as a prop.

// Exports the Bookings component as the default export, allowing it to be imported by other modules.
