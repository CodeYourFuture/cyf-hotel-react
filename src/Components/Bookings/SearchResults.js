import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
// import Bookings from "./Bookings";

const SearchResults = props => {
  return (
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
        <TableBody Body={props.results} />
        {/* <TableBody Body={[`1578`,`Mr/He/His`,'Jeanviere',`Boudouir`,`JBoudouir@something.com`,`7357`,`21/05/21`,`28/05/21`]}/>
            <TableBody Body={[`1781`,`Mrs/Her/Hers`,`Genevieve`,`Basson`,`GBasson@here.com`,`9357`,`21/05/21`,`28/05/21`]}/> */}
      </tbody>
    </table>
  );
};

export default SearchResults;
