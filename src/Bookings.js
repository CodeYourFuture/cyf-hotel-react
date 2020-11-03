import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import InputsButton from "./inputsButton";
import AddEntry from "./AddEntry";
//import fakeBookings from "./data/fakeBookings.json";

const Bookings = prop => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(null);
  const [bookingBackup, setbookingBackup] = useState(null);
  //common between this doc and searchresults
  function refresh(inp) {
    setBookings(bookingBackup);
    setLoading(inp);
  }
  //common b/t this doc and newentry.jj
  function addEntryFunction(cancelEntry) {
    document.getElementById("addEntryDiv").style.display = "none";
    //document.getElementById("table-responsive").style.display="none"
  }
  //common between this doc and search result
  function sorting(order, item) {
    let sortedArray;
    /////////////////////////////////first name
    if (item === "firstName") {
      if (order === "Asc") {
        sortedArray = bookings.sort(function(a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          } else if (a.firstName > b.firstName) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        sortedArray = bookings.sort(function(a, b) {
          if (a.firstName > b.firstName) {
            return -1;
          } else if (a.firstName < b.firstName) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }
    /////////////////////////////surname
    if (item === "surname") {
      if (order === "Asc") {
        sortedArray = bookings.sort(function(a, b) {
          if (a.surname < b.surname) {
            return -1;
          } else if (a.surname > b.surname) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        sortedArray = bookings.sort(function(a, b) {
          if (a.surname > b.surname) {
            return -1;
          } else if (a.surname < b.surname) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }
    /////////////////////////////email
    if (item === "email") {
      if (order === "Asc") {
        sortedArray = bookings.sort(function(a, b) {
          if (a.email < b.email) {
            return -1;
          } else if (a.email > b.email) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        sortedArray = bookings.sort(function(a, b) {
          if (a.email > b.email) {
            return -1;
          } else if (a.email < b.email) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }
    /////////////////////////////roomId
    if (item === "roomId") {
      if (order === "Asc") {
        sortedArray = bookings.sort(function(a, b) {
          if (a.roomId < b.roomId) {
            return -1;
          } else if (a.roomId > b.roomId) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        sortedArray = bookings.sort(function(a, b) {
          if (a.roomId > b.roomId) {
            return -1;
          } else if (a.roomId < b.roomId) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }
    /////////////////////////////////
    setBookings(sortedArray);
    setLoading(order);
  }

  function addEntryDivNone(newEntry) {
    const newEntryObj = {
      id: bookings.length,
      title: newEntry[0],
      firstName: newEntry[1],
      surname: newEntry[2],
      email: newEntry[3],
      roomId: newEntry[4],
      checkInDate: newEntry[5],
      checkOutDate: newEntry[6]
    };
    //setBookings(newEntryObj.concat(bookings))h
    setBookings(bookings.concat(newEntryObj));
    //setBookings(bookings.concat({"id":bookings.length,"title":newEntry[0],"firstName":newEntry[1],"surname":newEntry[2],"email":newEntry[3]}))
    document.getElementById("addEntryDiv").style.display = "none";
  }
  //common between this doc and inputsButton.
  function addEntryDivBlock() {
    document.getElementById("addEntryDiv").style.display = "block";
    //document.getElementById("table-responsive").style.display="block"
  }
  ////////common between this doc and search.js
  function search(searchVal) {
    if (searchVal === "") {
    } else {
      let findSearch = bookings.filter(function(obj) {
        return (
          obj.firstName.toLowerCase() === searchVal.toLowerCase() ||
          obj.surname.toLowerCase() === searchVal.toLowerCase()
        );
      });

      if (findSearch.length > 0) {
        setBookings(findSearch);
      } else {
        alert("Sorry:no data found");
      }
    }
  }
  useEffect(
    function() {
      //https://zubeda-hotel-server.glitch.me/bookings/
      //https://cyf-react.glitch.me/delayed
      fetch("https://zubeda-hotel-server.glitch.me/bookings")
        .then(function(obj) {
          return obj.json();
        })
        .then(function(data) {
          setBookings(data);
          // alert(prop.loading)
          //  bookingBackup=bookings;
          setbookingBackup(data);
          setLoading(prop.loading);
        })
        .then(function(error) {
          console.log(error);
          //window.location.assign("https://cyf-react.glitch.me/error")
          //window.location.assign("https://www.w3schools.com")
        });
    },
    [prop.loading]
  );
  return (
    <div className="App-content">
      <div className="container">
        {loading ? (
          <>
            <div
              id="SearchAndInputButton"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%"
              }}
            >
              <Search search={search} />
              <InputsButton
                addEntryDivBlock={addEntryDivBlock}
                bookings={bookings}
              />
            </div>

            <div
              id="addEntryDiv"
              style={{
                display: "none",
                border: "1px solid gray",
                marginBottom: "1px"
              }}
            >
              <div
                class="table-responsive"
                id="table-responsive"
                style={{ display: "table", fontSize: "14px" }}
              >
                <AddEntry
                  addEntryDivNone={addEntryDivNone}
                  addEntryFunction={addEntryFunction}
                />
              </div>
            </div>
            {/* <SearchResults people={bookings} /> */}

            <SearchResults
              people={bookings}
              sorting={sorting}
              refresh={refresh}
            />
          </>
        ) : (
          <div class="alert alert-dark" role="alert">
            <p>loading</p>.....................................................
          </div>
        )}
        {/* <div id="addEntryDiv" style={{display:"none"}}>
            <AddEntry addEntryDivNone={addEntryDivNone}/>
        </div> */}
      </div>
    </div>
  );
};

export default Bookings;
