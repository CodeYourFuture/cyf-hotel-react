import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  let selectedTd;
  let selectedKey;
  let [currentId, setCurrentId] = useState("");
  ////////////////////////////////////////////////////////////////////////////////////
  const [alphaSort, setAlphaSort] = useState({
    id: 0,
    title: 0,
    firstName: 0,
    surname: 0,
    email: 0,
    roomId: 0,
    checkInDate: 0,
    checkOutDate: 0,
    "Number of nights": 0
  });

  const [property, SetProperty] = useState("");

  //////////////////////////////////////////////////////////////////////////////////////
  function highlightWhenClicked(event) {
    selectedTd = event.target;

    if (selectedTd.parentNode.className.includes("bookings highlight")) {
      selectedTd.parentNode.classList.remove("highlight");
      return;
    }
    selectedTd.parentNode.classList.add("highlight");
    ////////////////////////////////////////////////////
    selectedKey = selectedTd.className;

    // sortedArray(azSorting);
    const updatedData = {
      ...alphaSort,
      [selectedKey]: alphaSort[selectedKey] + 1
    };
    setAlphaSort(updatedData);
    SetProperty(selectedKey);

    /////////////////////////////////////////////////////
  }
  console.log("out", alphaSort);
  console.log("out", property);
  //if (alphaSort%2) {}

  function azSorting(a, b) {
    let textA = a[property]; //let textA = a[selectedKey].toUpperCase();
    let textB = b[property]; //let textB = b[selectedKey].toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  }

  function zaSorting(a, b) {
    let textA = a[property];
    let textB = b[property];

    return textA > textB ? -1 : textA < textB ? 1 : 0;
  }

  console.log("props.bookings", props.bookings);
  ////////////////////////////////////////////////////////////
  if (property !== "") {
    if (alphaSort[property] % 2) {
      props.bookings.sort(azSorting);
    } else {
      props.bookings.sort(zaSorting);
    }
    SetProperty("");
  }

  //props.bookings.sort(azSorting);
  console.log(props.bookings);

  ////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////
  function handleShowProfile(event) {
    /*   currentId = event.target.id;
    console.log(currentId); */
    setCurrentId(event.target.id);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Profile</th>
            {Object.keys(props.bookings[0]).map(function(key) {
              return (
                <th key={(-Math.random() * 10000000000).toString()} scope="col">
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.bookings.map(result => {
            return (
              <tr
                className="bookings"
                key={(Math.random() / 10000000000).toString()}
                onClick={highlightWhenClicked}
                //here was onClick
              >
                <td>
                  <button id={result.id} onClick={handleShowProfile}>
                    Show profile
                  </button>
                </td>
                {Object.keys(result).map(function(key, index) {
                  return (
                    <td
                      key={(Math.random() * 10000000000).toString()}
                      className={key}
                      //replaced from line 44
                    >
                      {result[key]}
                    </td>
                  );
                })}
                {/*   <td>{NumberNights(result)}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>

      {currentId ? <CustomerProfile id={currentId} /> : null}
    </div>
  );
};

export default SearchResults;
