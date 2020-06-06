import React from "react"
import moment from "moment"



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
                    return (
                        <tr key={index} >
                            <th onClick={} key={"id" + index}>{bookingData.id}</th>
                            <td onClick={} key={"title " + index}>{bookingData.title}</td>
                            <td onClick={} key={"firstName " + index}>{bookingData.firstName}</td>
                            <td onClick={} key={"surname " + index}>{bookingData.surname}</td>
                            <td onClick={} key={"email " + index}>{bookingData.email}</td>
                            <td onClick={} key={"roomId " + index}>{bookingData.roomId}</td>
                            <td onClick={} key={"checkInDate " + index}>{bookingData.checkInDate}</td>
                            <td onClick={} key={"checkOutDate " + index}>{bookingData.checkOutDate}</td>
                            <td onClick={} key={"totalNight " + index}>{moment(bookingData.checkOutDate).diff(bookingData.checkInDate, "days")}</td>
                        </tr>)
                })}
            </tbody>
        </table >

    )


}

export default SearchResults;