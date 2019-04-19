import React from 'react';

const bookingsHeaders = ["Id", "Title", "First Name", "Surname", "Email", "Room", "Check in", "Check out", "Stay Duration"];

const BookingsHeader = (props) => {
    return (
        <thead className="thead-dark">
            <tr>
                {props.bookingsHeadersInfo.map((header, index) => {
                    return (
                        <th scope="col" key={index}>{header}</th>

                    )

                })}

                {/* <th><AddHeaderTitle value={`Stay Duration`} /></th> */}
            </tr>
        </thead>
    )
}

export { BookingsHeader, bookingsHeaders };