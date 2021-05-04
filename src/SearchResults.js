import React, { useState } from "react"
import TableRow from "./TableRow"
import CustomerProfile from "./CustomerProfile"

const SearchResults = props => {
    const [userId, setUserId] = useState("");

    return (
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">firstName</th>
                    <th scope="col">surname</th>
                    <th scope="col">email</th>
                    <th scope="col">roomId</th>
                    <th scope="col">checkInDate</th>
                    <th scope="col">checkOutDate</th>
                    <th scope="col">totalNight</th>
                    <th scope="col">newColumn</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map((bookingData, index) => <TableRow bookingData={bookingData} key={index} setUserId={setUserId} showProfile={props.showProfile} />
                )}

                < CustomerProfile userId={userId} />
            </tbody>
        </table >
    )

}

export default SearchResults;