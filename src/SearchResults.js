import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";

const SearchResults = props => {
  const [alphaSort, setAlphaSort] = useState({
    id: 1,
    title: 1,
    firstName: 1,
    surname: 1,
    email: 1,
    roomId: 1,
    checkInDate: 1,
    checkOutDate: 1,
    "Number of nights": 1
  });
  console.log(alphaSort);
  let selectedTd;

  let [currentId, setCurrentId] = useState("");
  let readyArr = props.results.slice(0);
  //////////////////////////////
  readyArr.forEach(element => {
    element["Number of nights"] = NumberNights(element);
  });
  const [passedArr, setPassedArr] = useState(readyArr);
  //////////////////////////////////////////

  ////////////////////////////////////////////
  function highlightWhenClicked(event) {
    selectedTd = event.target;
    let selectedKey = selectedTd.className;
    function azSorting(a, b) {
      let textA = a[selectedKey]; //let textA = a[selectedKey].toUpperCase();
      let textB = b[selectedKey]; //let textB = b[selectedKey].toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    }

    function zaSorting(a, b) {
      let textA = a[selectedKey];
      let textB = b[selectedKey];

      return textA > textB ? -1 : textA < textB ? 1 : 0;
    }

    function sortedArray(func) {
      setPassedArr(readyArr.sort(func).slice(0));
    }
    ///////////////////////////////////////////////////////

    if (selectedTd.parentNode.className.includes("bookings highlight")) {
      selectedTd.parentNode.classList.remove("highlight");
      return;
    }
    selectedTd.parentNode.classList.add("highlight");
    //////////////////////////////////////////////////////
    /*   const updatedUserData = {
      ...userData,
      [event.target.name]: event.target.value,
    };

    setUserData(updatedUserData);
 */
    console.log(selectedKey);
    console.log([selectedKey]);
    console.log(alphaSort[selectedKey]);
    //////////////////////////////////////////////////////
    if (alphaSort.selectedKey === 0) {
      // sortedArray(azSorting);
      const updatedData = {
        ...alphaSort,
        [selectedKey]: 1
      };
      setAlphaSort(updatedData);
    } else {
      // sortedArray(zaSorting);
      const updatedData = {
        ...alphaSort,
        [selectedKey]: 1
      };
      setAlphaSort(updatedData);
    }
    console.log(alphaSort);
    //////////////////////////////////////////////////////////
  }

  function handleShowProfile(event) {
    currentId = event.target.id;
    console.log(currentId);
    setCurrentId(event.target.id);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Profile</th>
            {Object.keys(props.results[0]).map(function(key) {
              return (
                <th key={(-Math.random() * 10000000000).toString()} scope="col">
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {passedArr.map(result => {
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

function NumberNights(result) {
  let checkIn = moment(result.checkInDate);
  let checkOut = moment(result.checkOutDate);

  return checkOut.diff(checkIn, "days");
}

export default SearchResults;
