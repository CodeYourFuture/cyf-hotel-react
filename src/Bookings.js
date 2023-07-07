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

// Pseudocode: This code represents a React component called "Bookings". It imports other components such as "Search",
// "SearchResults", and "CustomerProfile". Inside the Bookings component, several state variables are declared using the
//  useState hook: bookings, customerId, data, isLoading, and errorOccurred.

// The code begins with importing necessary dependencies and components: React: The core React library. useEffect and
// useState from React: Hooks used for managing side effects and state within functional components. The Search, SearchResults,
// and CustomerProfile components from their respective files. The Bookings component is defined using the arrow function syntax.

// Inside the Bookings component, several state variables are declared using the useState hook: bookings: Holds the list
// of bookings data, initially an empty array. customerId: Holds the ID of the selected customer, initially null. data: Holds the
// original unfiltered bookings data, initially an empty array. isLoading: Indicates whether the data is currently being
// loaded, initially set to true. errorOccurred: Holds information about any error that occurred during data fetching,
//initially an object with ok (indicating if the request was successful), status (HTTP status code), and statusText
// (HTTP status text). The useEffect hook is used to fetch data from the server when the component is mounted (empty dependency array
// [] passed as the second argument to useEffect). The effect function is defined inside the useEffect hook and is executed
// when the component mounts.

// The effect function is defined as an asynchronous function, fetchData. Inside fetchData, an HTTP GET request is made
// to the URL "https://cyf-react.glitch.me" using the fetch function. If the response is not successful (status code
// other than 200), an error is thrown, and the errorOccurred state variable is updated with the error details. If the
// response is successful, the JSON data is extracted from the response using response.json(), and then both bookings
// and data state variables are updated with the received data. Finally, the isLoading state variable is set to false
// to indicate that data loading is complete. If an error occurs during the fetching process, it is caught and logged
// to the console. The search function is defined to handle the filtering of bookings based on a search value.

// If the searchVal parameter is empty or contains only whitespace characters after trimming, the original data is set as
// the bookings. Otherwise, the bookings are filtered using the filter method, which checks if either the firstName or
// the surname of each booking starts with the searchVal (case-insensitive comparison). The filtered bookings are then
// set as the new value for the bookings state variable. The JSX code defines the structure and content of the rendered
// output. The top-level element is a <div> with the class name "App-content". Inside this div, there is another <div>
// with the class name "container". Inside the container, the Search component is rendered, which receives the search
// function as a prop. Next, there is a conditional rendering based on the state variables errorOccurred and isLoading. If
// an error occurred during data fetching (errorOccurred.ok === false), an error message is displayed showing the HTTP status
// code and status text. If the data is still loading (isLoading === true), a loading message is displayed. If the data
// has been loaded and no error occurred, the SearchResults component is rendered, passing the filtered `
