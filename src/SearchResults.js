import React, { useState } from "react";
import ShowProfile from "./ShowProfile.js";
import AddCustomer from "./AddCustomer.js";
import BookingRows from "./BookingRows.js";

const SearchResults = props => {
  const [profile, setProfile] = useState("");
  const [addCustomerForm, setAddCustomerForm] = useState(false);
  const profileState = profileData => {
    setProfile(profileData);
  };
  const showAddCustomerForm = () => {
    setAddCustomerForm(false);
  };
  return (
    <div id="SearchResults" className="SearchResults_CSS">
      <table>
        <thead>
          <tr>
            <th className="Head_TH_CSS" />
            <th className="Head_TH_CSS">Title</th>
            <th className="Head_TH_CSS">First Name</th>
            <th className="Head_TH_CSS">Last Name</th>
            <th className="Head_TH_CSS">Email</th>
            <th className="Head_TH_CSS">Room id</th>
            <th className="Head_TH_CSS">Check in date</th>
            <th className="Head_TH_CSS">Check out date</th>
            <th className="Head_TH_CSS">Nights</th>
            <th className="Head_TH_CSS" />
          </tr>
        </thead>
        <tbody>
          {props.results.map((element, index) => {
            return (
              <BookingRows
                profileState_F={profileState}
                element={element}
                key={index}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
      <div className="Div_Add_CSS">
        <p className="P_Add_CSS" onClick={() => setAddCustomerForm(true)}>
          +
        </p>
      </div>
      {addCustomerForm ? (
        <AddCustomer
          showAddCustomerForm_F={showAddCustomerForm}
          addCustomer_F={props.addCustomer_F}
        />
      ) : null}
      {profile ? (
        <ShowProfile profileState_F={profileState} profileData={profile} />
      ) : null}
    </div>
  );
};

export default SearchResults;
