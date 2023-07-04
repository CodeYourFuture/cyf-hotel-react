import { useState } from "react";
import SearchResults from "./SearchResults";



const InputFormForTable = ({ bookings, setBookings }) => {
    const [newCustomer, setNewCustomer] = useState({})


    const handleIputs = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        setNewCustomer(values => ({
            ...values,
            [key]: value,
        }));
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        setNewCustomer(newCustomer.id = bookings.length + 1)
        setBookings([...bookings, newCustomer])
    }


    return (
        <div>
            {
                bookings.length > 0 ? (<SearchResults bookings={bookings} newCustomer={newCustomer} />)
                    : bookings !== 500 ? (<span>Loading... </span>) : (<span className="error-message"> Error 500</span>)
            }
            <div className="holder-for-customer-form">
                <h5>Add New Customer</h5>
                <form className="form" onSubmit={handleSubmitForm}>
                    <div className="holder-for-inputs">
                        <label htmlFor="id" >
                            ID
                            <input type="number" name="id" value={bookings.length + 1} onChange={handleIputs} className="id"></input>
                        </label>

                        <label htmlFor="title">
                            Title
                            <select type="text" id="title" name="title" value={newCustomer.title} onChange={handleIputs} className="title">
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Mrs</option>
                                <option value="Madam">Madam</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Dame">Dame</option>
                                <option value="Prince">Prince</option>
                                <option value="Princess">Princess</option>
                            </select>
                        </label>

                        <label htmlFor="firstName" >
                            First Name
                            <input type="text" name="firstName" value={newCustomer.fname} onChange={handleIputs} required></input>
                        </label>

                        <label htmlFor="surname" >
                            Surename
                            <input type="text" name="surname" value={newCustomer.surname} onChange={handleIputs} required></input>
                        </label>

                        <label htmlFor="email">
                            Email
                            <input type="email" name="email" value={newCustomer.email} onChange={handleIputs} required></input>
                        </label>

                        <label htmlFor="roomId">
                            Room ID
                            <input type="number" name="roomId" value={newCustomer.roomId} onChange={handleIputs} className="roomID" required></input>
                        </label>

                        <label htmlFor="checkinDate">
                            Check in Date
                            <input type="date" name="checkInDate" value={newCustomer.checkInDate} onChange={handleIputs} required></input>
                        </label>


                        <label htmlFor="checkoutDate" >
                            Check out Date
                            <input type="date" name="checkOutDate" value={newCustomer.checkOutDate} onChange={handleIputs} required></input>
                        </label>
                    </div>

                    <input type="submit" className="form-submit"></input>
                </form>
            </div>
        </div>
    )
}

export default InputFormForTable