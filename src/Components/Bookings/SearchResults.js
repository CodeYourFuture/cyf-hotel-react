import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
 const [customerId, setCustomerId] = useState(null);
 const updateCustomerId = (id)=>{
   console.log("This is id after click:",id);
    setCustomerId(id);
 }
  return (
    <div className="Container" style={{display:"flex"}}>
      <table className="table">
        <thead>
          <TableHeader
            Headings={[
              `Id`,
              `Title`,
              `First name`,
              `Surname`,
              `Email`,
              `Room id`,
              `Check in date`,
              `Check out date`,
              `Number of nights staying`,
              `Customer Profile`
            ]}
          />
        </thead>
        <tbody>
          <TableBody Body={props.results} updateFunction={updateCustomerId} />
          {/* <TableBody Body={[`1578`,`Mr/He/His`,'Jeanviere',`Boudouir`,`JBoudouir@something.com`,`7357`,`21/05/21`,`28/05/21`]}/>
            <TableBody Body={[`1781`,`Mrs/Her/Hers`,`Genevieve`,`Basson`,`GBasson@here.com`,`9357`,`21/05/21`,`28/05/21`]}/> */}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
