import { useState } from "react"
const EditWindow = ({ setEdit, clientId, bookings, setBookings }) => {
    let editingBooking = bookings.filter(booking => { return booking.id == clientId })

    const [title, setTitle] = useState(editingBooking[0].title)
    const [surname, setSurname] = useState(editingBooking[0].surname)
    const [email, setEmail] = useState(editingBooking[0].email)
    const [firstName, setFirstName] = useState(editingBooking[0].firstName)
    const [roomId, setRoomId] = useState(editingBooking[0].roomId)
    const [checkInDate, setCheckInDate] = useState(editingBooking[0].checkInDate)
    const [checkOutDate, setCheckOutDate] = useState(editingBooking[0].checkOutDate)

    const handleSubmit = (event) => {
        event.preventDefault()
        const editedCustomer = {
            title, firstName, surname, email, checkInDate, checkOutDate, roomId
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedCustomer)
        };
        fetch(`https://olha-danylevska-hotel-booking-server.onrender.com/bookings/${clientId}`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(updatedData => {
                console.log({ updatedData })
                setBookings(updatedData);
                setEdit(false)
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    }

    const handleCloseButton = () => {
        setEdit(false)
    }

    return (
        <div className="edit-container">
            <form className="form-edit" onSubmit={handleSubmit} >
                <button className="close-edit" onClick={handleCloseButton}>X</button>
                <h5>{`Edit Customer Info (ID #${editingBooking[0].id})`}</h5>

                <label htmlFor="title">
                    Title
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}>
                    </input>
                </label>
                <label htmlFor="name">
                    Name
                    <input type="text" id="name" name="name" value={firstName} onChange={(e) => setFirstName(e.target.value)}>
                    </input>
                </label>
                <label htmlFor="surname">
                    Surname
                    <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}>
                    </input>
                </label>
                <label htmlFor="email">
                    Email
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </label>
                <label htmlFor="room-id">
                    Room ID
                    <input type="text" id="room-id" name="room-id" value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                    </input>
                </label>
                <label htmlFor="checkIn">
                    Check In
                    <input type="text" id="checkInDate" name="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)}>
                    </input>
                </label>
                <label htmlFor="checkOut">
                    Check Out
                    <input type="text" id="checkOutDate" name="checkOutDate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)}>
                    </input>
                </label>
                <input type="submit" className="edit-submit"></input>
            </form>
        </div>
    )
}

export default EditWindow