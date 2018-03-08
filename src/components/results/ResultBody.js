import React from "react";

const ResultBody = ({ filteredResult }) => {
    return (
        <tbody>
            {filteredResult.map((data, i) =>
                <tr key={i}>
                    <td>{data.title}</td>
                    <td>{data.firstName}</td>
                    <td>{data.surname}</td>
                    <td>{data.email}</td>
                    <td>{data.roomId}</td>
                    <td>{data.checkInDate}</td>
                    <td>{data.checkOutDate}</td>
                    <td>{parseInt((new Date(data.checkOutDate) - new Date(data.checkInDate)) / (86400000), 10)} days</td>
                </tr>
            )}
        </tbody>
    )
};
export default ResultBody;