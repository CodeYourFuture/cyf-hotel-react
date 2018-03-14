
import React from "react";

const ResultBody = ({ filteredResult }) => {
    return (
        <tbody>
            {filteredResult.map((data, i) =>
                <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.firstname}</td>
                    <td>{data.surname}</td>
                    <td>{data.email}</td>
                    <td>{data.room_id}</td>
                    <td>{data.check_in_date}</td>
                    <td>{data.check_out_date}</td>
                    <td>{parseInt((new Date(data.check_out_date) - new Date(data.check_in_date)) / (86400000), 10)}</td>
                </tr>
            )}
        </tbody>
    )
};
export default ResultBody;