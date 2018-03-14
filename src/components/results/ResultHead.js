
import React from "react";

const ResultHead = ({ sortBy, sortByNumber }) => {
    return (
        <thead>
            <tr>
                <th onClick={() => sortByNumber('id')}><button className="btn">ID</button></th>
                <th onClick={() => sortBy('title')}><button className="btn">Title</button></th>
                <th onClick={() => sortBy('firstname')}><button className="btn">First Name</button></th>
                <th onClick={() => sortBy('surname')}><button className="btn">Sur Name</button></th>
                <th onClick={() => sortBy('email')}><button className="btn">Email</button></th>
                <th onClick={() => sortByNumber('room_id')}><button className="btn">Room Id</button></th>
                <th onClick={() => sortBy('check_out_date')}><button className="btn">Check in Date</button></th>
                <th onClick={() => sortBy('check_in_date')}><button className="btn">Check Out Date</button></th>
                <th><button className="btn btn-sort ">Days</button></th>
            </tr>
        </thead>
    )
};
export default ResultHead;