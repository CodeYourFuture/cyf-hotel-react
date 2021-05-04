import React, { useState } from "react";
import Row from "./Row";
import CustomerProfile from "./CustomerProfile";
const SearchResults = prop => {
  // alert(props.length)
  const [stateRowId, setRowId] = useState(null);
  //common b/w this and booing
  function refresh() {
    prop.refresh("r");
  }
  //common between row.js and this document
  function selectRow(rowid) {
    document.getElementById("selectedProfile").style.display = "block";
    setRowId(rowid); //activate and call customerprofile.jsq
  }
  //cpmmon between customer profile and this doc
  function deleteSelectedProfile() {
    document.getElementById("selectedProfile").style.display = "none";
  }
  ///////////////////////////////sorting

  function Afunction(event) {
    if (event.target.value === "Asc") {
      prop.sorting(event.target.value, event.target.id);
      event.target.textContent = "Z->A";
      event.target.value = "Dsc";
    } else {
      prop.sorting(event.target.value, event.target.id);
      event.target.textContent = "A->Z";
      event.target.value = "Asc";
    }
  }

  return (
    <>
      <div
        id="selectedProfile"
        style={{ border: "1px solid gray", marginBottom: "1px" }}
      >
        {stateRowId && (
          <>
            <CustomerProfile
              id={stateRowId}
              deleteSelectedProfile={deleteSelectedProfile}
            />{" "}
          </>
        )}
      </div>

      <div class="table-responsive" style={{ fontSize: "14px" }}>
        <table class="table table-striped table-light table-bordered table-hover table-sm">
          <caption>List of users</caption>
          <thead class="thead-light">
            <th scope="col">#</th>
            <th scop="col">Title</th>
            <th scope="col" style={{ width: "95px" }}>
              F.Name
              <button
                id="firstName"
                value="Asc"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "10px",
                  color: "blue",
                  fontWeight: "bold"
                }}
                onClick={Afunction}
              >
                A->Z
              </button>
            </th>
            <th scope="col" style={{ width: "100px" }}>
              S.Name
              <button
                id="surname"
                value="Asc"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "10px",
                  color: "blue",
                  fontWeight: "bold"
                }}
                onClick={Afunction}
              >
                A->Z
              </button>
            </th>
            <th scope="col">
              Email
              <button
                id="email"
                value="Asc"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "10px",
                  color: "blue",
                  fontWeight: "bold"
                }}
                onClick={Afunction}
              >
                A->Z
              </button>
            </th>
            <th scope="col" style={{ width: "100px" }}>
              RoomID
              <button
                id="roomId"
                value="Asc"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "10px",
                  color: "blue",
                  fontWeight: "bold"
                }}
                onClick={Afunction}
              >
                A->Z
              </button>
            </th>
            <th scope="col">Check-In</th>
            <th scope="col">Check-Out</th>
            <th scope="col">stay</th>
            <th scope="col">
              <img
                style={{ width: "30px", height: "25px" }}
                onClick={refresh}
                alt="refresh"
                src="https://www.freeiconspng.com/thumbs/refresh-icon/refresh-icon-0.png"
              />
            </th>
          </thead>
          <tbody>
            {prop.people.map(function(obj) {
              return (
                <>
                  <Row props={obj} selectRow={selectRow} />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <div id="selectedProfile">
      {stateRowId &&(< CustomerProfile id={stateRowId} deleteSelectedProfile={deleteSelectedProfile}/>)}

      </div> */}
    </>
  );
};
export default SearchResults;
