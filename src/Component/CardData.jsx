import react from "react";



const CardData = ({result}) => (
        <>
            <tr>
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td> {
                    (new Date(`${result.checkOutDate}T00:00:01Z`) - new Date(`${result.checkInDate}T00:00:01Z`))/ 86400000
                    }</td>
            </tr>
        </>
)

export default CardData;