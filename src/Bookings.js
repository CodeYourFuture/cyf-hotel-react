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

  const { ok, status, statusText } = errorOccurred;

  const fetchBookings = async () => {
    try {
      const response = await fetch("https://cyf-react.glitch.me");
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setBookings(data);
      setData(data);
      setIsLoading(false);
      setErrorOccurred({ ok: true, status: "", statusText: "" });
    } catch (error) {
      setErrorOccurred({
        ok: false,
        status: error.toString(),
        statusText: "Failed to fetch bookings data.",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const search = (searchVal) => {
    const trimmedSearchVal = searchVal.trim().toLowerCase();
    if (trimmedSearchVal === "") {
      setBookings(data);
    } else {
      const filterBookings = bookings.filter(
        (element) =>
          element.firstName.toLowerCase().startsWith(trimmedSearchVal) ||
          element.surname.toLowerCase().startsWith(trimmedSearchVal)
      );
      setBookings(filterBookings);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!ok ? (
          <div className="loader">
            <span>
              An Error occurred when fetching the Bookings Data: {status}{" "}
              {statusText}
            </span>
          </div>
        ) : isLoading ? (
          <div>
            <ClipLoader color="green" size={70} />
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

// It is a React component named "Bookings". The component imports the necessary dependencies and
// other components needed for rendering. It imports React, useEffect, and useState from the "react"
// library. It also imports the ClipLoader component from the "react-spinners" library, and it
// imports the Search, OutcomeSearch, and CustomerProfile components from local files. The Bookings
// component is defined as a functional component using an arrow function. Inside the component,
// several state variables are declared using the useState hook: bookings represents the list of
// bookings and is initialized as an empty array. customerId represents the ID of the selected
// customer and is initialized as null. data represents the original unfiltered data and is
// initialized as an empty array. isLoading is a boolean flag that indicates whether the data is
// still loading and is initialized as true. errorOccurred is an object that represents whether an
// error occurred during the data fetching process. It has three properties: ok (boolean), status
// (string), and statusText (string). It is initialized with ok set to true and other properties as
// empty strings. The fetchBookings function is declared as an asynchronous function. It is responsible for fetching the bookings data from the server. Inside the function:

// A fetch request is made to the specified URL (https://cyf-react.glitch.me). If the response is
// not successful (i.e., response.ok is false), an error is thrown. If the response is successful,
// the data is parsed as JSON using response.json(). The parsed data is then used to update the
// bookings, data, isLoading, and errorOccurred state variables. If there is an error during the
// fetch request or parsing the response, the error is caught, and the errorOccurred state variable
// is updated accordingly. The useEffect hook is used to fetch the bookings data when the component
// is rendered. It calls the fetchBookings function.

// The search function is declared to handle the search functionality. It takes a searchVal parameter
// representing the search value entered by the user. Inside the function: The searchVal is trimmed
// and converted to lowercase. If the trimmed search value is an empty string, the bookings state
// variable is set to the original unfiltered data (data). Otherwise, a new array called filterBookings
// is created by filtering the bookings array. It includes only the elements whose firstName or surname
// properties start with the trimmed search value. The bookings state variable is updated with the
// filtered array.

// The component renders the JSX structure: It starts with a <div className="App-content"> container.
// Inside the container, there is another <div className="container">. The Search component is
// rendered with the search function passed as a prop. If errorOccurred.ok is false, indicating an
// error occurred during data fetching, an error message is displayed. If isLoading is true, a loading
// spinner (ClipLoader) is displayed. If neither an error occurred nor the data is still loading,
// the OutcomeSearch component is rendered with the bookings and setCustomerId prop. If customerId
// is not null, indicating a customer is selected, the CustomerProfile component is rendered with the
// id prop set to customerId. Finally, the Bookings component is exported as the default export of
// the module, allowing it to be imported and used in other parts of the application.
