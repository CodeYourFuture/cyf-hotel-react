import React, { useEffect, useState } from "react";

const CustomerProfile = prop => {
  //alert("recv"+prop.id)
  // let profileRow=document.getElementById("table-responsive");
  const [profile, setProfile] = useState([]);

  //common between this doc and searchResults.js
  function deleteProfile(event) {
    prop.deleteSelectedProfile(); //call searchResults.js
    // document.getElementById("table-responsive").style.display="none"
  }
  useEffect(
    function() {
      //https://cyf-react.glitch.me/customers/${prop.id}
      fetch(`https://zubeda-hotel-server.glitch.me/bookings/${prop.id}`)
        // alert("====="+prop.id)
        .then(function(obj) {
          return obj.json();
        })
        .then(function(data) {
          console.log(data);
          // alert("fetch="+data.firstName)
          setProfile(data);
        })
        .then(function(error) {
          console.log(error);
        });
    },
    [prop.id]
  );

  return (
    <>
      <div
        class="table-responsive"
        id="table-responsive"
        style={{ fontSize: "14px" }}
      >
        <table class="table table-striped table-light table-bordered table-hover table-sm">
          <thead class="thead-light">
            <th scope="col">#</th>
            <th scop="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">SurNAme</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Delete</th>
          </thead>
          <tbody>
            <tr id="selectedRowId">
              <td>{profile.id}</td>
              <td>{profile.title}</td>
              <td>{profile.firstName}</td>
              <td>{profile.surname}</td>
              <td>{profile.email}</td>
              <td>{profile.vip && profile.phoneNumber}</td>
              <td>
                <button id={profile.id} onClick={deleteProfile}>
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default CustomerProfile;
