import React, { useState } from "react"
import TableRow from "./TableRow"




const SearchResults = props => {
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
                </tr>
            </thead>
            <tbody>
                {props.results.map((bookingData, index) => {
                    return <TableRow bookingData={bookingData} key={index} />
                })}
            </tbody>
        </table >

    )


}

export default SearchResults;