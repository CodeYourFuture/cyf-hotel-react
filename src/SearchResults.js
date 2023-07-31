import React, { useState } from "react";
import moment from "moment";
moment().format();
import CustomerProfile from "./CustomerProfile";
import AddNewBooking from "./AddNewBooking";


const SearchResults = (props) => {
  const [customerId, setCustomerId] = useState(null);
  const [descendingOrder, setDescendingOrder] = useState(true); 
  const [valueToSort, setValueToSort] = useState("id");

  function highlighted(event) {
      event.target.parentElement.className === "Highlighted"
      ? event.target.parentElement.className = ""
      : event.target.parentElement.className = "Highlighted"; 
    
  }

  const handleSortingValue = (event) => {
    let item = event.target.name;
    console.log(item)
    setValueToSort(item) 
    setDescendingOrder(!descendingOrder);
  }

  function sortedResults () {
    if(descendingOrder) {
      return props.results.slice().sort((a, b) => a[valueToSort].toString().localeCompare(b[valueToSort].toString()));
    } else {
      return props.results
        .slice()
        .sort((a, b) => b[valueToSort].toString().localeCompare(a[valueToSort].toString()));
    }
  }
  
    function deleteBooking(id) {
      fetch(`https://booking-server-98w3.onrender.com/bookings/${id}`, {
        method: "DELETE", //
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {console.log(data), props.updates()});
    }

    // function updateBooking(id){
    //   let chosenBooking = props.results.find(booking => booking.id === id);
    //   console.log(chosenBooking);      
    // }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" id="id">
              id{" "}
              <button name="id" onClick={handleSortingValue}>
                {descendingOrder ? "A -> Z" : "Z-> A"}
              </button>
            </th>

            <th scope="col" id="title">
              title
              <button name="title" onClick={handleSortingValue}>
                {descendingOrder ? "A -> Z" : "Z-> A"}
              </button>
            </th>
            <th scope="col" id="firstName">
              first name
              <button name="firstName" onClick={handleSortingValue}>
                {descendingOrder ? "A -> Z" : "Z-> A"}
              </button>
            </th>
            <th scope="col" id="surname">
              surname
              <button name="surname" onClick={handleSortingValue}>
                {descendingOrder ? "A -> Z" : "Z-> A"}
              </button>
            </th>
            <th scope="col" id="email">
              email<br></br>
              <button name="email" onClick={handleSortingValue}>
                {descendingOrder ? "A -> Z" : "Z-> A"}
              </button>
            </th>
            <th scope="col">
              room id
              <button name="roomId" onClick={handleSortingValue}>
                {descendingOrder ? "A -> Z" : "Z-> A"}
              </button>
            </th>
            <th scope="col">
              check in date
              <button name="checkInDate" onClick={handleSortingValue}>
                {descendingOrder ? "A -> Z" : "Z-> A"}
              </button>
            </th>
            <th scope="col">check out date</th>
            <th scope="col">nights total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {sortedResults().map((result) => {
            function nightsTotal() {
              let dateOut = moment(result.checkOutDate);
              let dateIn = moment(result.checkInDate);
              return dateOut.diff(dateIn, "days");
            }

            let nights = nightsTotal();
            return (
              <tr key={result.id} onClick={highlighted}>
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{nights}</td>
                <td>
                  <div>
                    <button onClick={() => setCustomerId(result.id)}>
                      Show profile
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    <button onClick={() => deleteBooking(result.id)}>
                      Delete
                    </button>
                    {/* <button onClick={() => updateBooking(result.id)}>
                      Update
                    </button> */}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </>
  );
}

export default SearchResults;
