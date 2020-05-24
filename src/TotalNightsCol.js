import React from "react"
import SearchResults from "./SearchResults"


const TotalNightsCol = () => {
    return (
        <td key={"totalNight " + index}>{moment(bookingData.checkOutDate).diff(bookingData.checkInDate, "days")}</td>
    )



}
export default TotalNightsCol 