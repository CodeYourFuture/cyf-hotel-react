// import { useState } from "react";
// import { useEffect } from "react";
import React, { useState, useEffect } from "react";

// #### 20. Display a customer profile - step 1

// **Instructions:** Add a new column in the table of the `<SearchResults />` component and display a `<button>` for each row. The text of the button should read "Show profile". Then, create a new `<CustomerProfile />` component. This component should be rendered next to the table in the `<SearchResults />` component. This component should receive one prop `id`. When clicking on a "Show profile" button for a given row, the component `<CustomerProfile />` should display the text "Customer <ID> Profile", where <ID> is the id of the selected customer. Initially, the `<CustomerProfile />` component doesn't show anything.

// **Hint:** You need to record the selected customer id after clicking on a "Show profile" button. In which component do you think this state should be defined?

// **Test:** When first showing the page, no customer profile is displayed. When clicking the first "Show profile" button of the table, the text "Customer 1 profile" appears. When clickong the second "Show profile" button of the table, the text "Customer 2 profile" appears instead.

const CustomerProfile = ({id}) => {

  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        console.log(id);
      })
      .catch((error) => {
        console.error(error);
      });
    
  }, [id]);

//   const { results } = props;

  return profile ? (
    <div>
      <p>Customer ID:{profile.id}</p>
      {/* <p>Customer Name:{profile.firstName} {profile.surname}</p>
      <p>Customer E-mail:{profile.email}</p> */}
    </div>
  ) : (
    id && <p>loading profile....</p>
  );

};

export default CustomerProfile;
