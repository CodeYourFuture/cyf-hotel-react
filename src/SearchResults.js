import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
// import Bookings from "./Bookings";

const SearchResults = ()=>{
return(
    <table className="table">
        <thead>
            <TableHeader Headings={[`id`, `title`, `first name`, `surname`, `email`, `room id`, `check in date`,`check out date`]}/>
        </thead>
        <tbody>
            <TableBody Body={[`1578`,`Mr/He/His`,'Jeanviere',`Boudouir`,`JBoudouir@something.com`,`7357`,`21/05/21`,`28/05/21`]}/>
        </tbody>
    </table>
)
}

export default SearchResults;