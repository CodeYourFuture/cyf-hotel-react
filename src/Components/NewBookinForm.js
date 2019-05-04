import React from 'react';
import Button from './Button'
class NewBookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null, surname: null,
            title: null, checkInDate: null, checkOutDate: null, roomId: null, email: null
        }
    }

    setInputRef = (input) => {
        this.input = input;
    }
    onSubmit = (event) => {
        if (!this.state.email.includes("@")) {
            event.preventDefault();
            this.input.style.border = '2px solid red';
            return;
        }
        event.preventDefault();
        this.props.addBooking(this.state)
    }
    render() {

        return (
            < form onSubmit={this.onSubmit} className="form-group search-box" >
                <label htmlFor="customerName">Enter new Booking here</label>
                <div className="new-booking-fields">
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder="title"
                        value={this.state.title}
                        onChange={(e) => { this.setState({ title: e.target.value }) }}
                    />
                    <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        placeholder="Customer first name"
                        value={this.state.firstName}
                        onChange={(e) => { this.setState({ firstName: e.target.value }) }}
                    />
                    <input
                        type="text"
                        id="surname"
                        className="form-control"
                        placeholder="Surname"
                        value={this.state.surname}
                        onChange={(e) => { this.setState({ surname: e.target.value }) }}
                    />

                    <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        ref={this.setInputRef}
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                    />

                    <input
                        type="text"
                        id="roomId"
                        className="form-control"
                        placeholder="Room Id"
                        value={this.state.roomId}
                        onChange={(e) => { this.setState({ roomId: e.target.value }) }}
                    />

                    <input
                        type="text"
                        id="checkInDate"
                        className="form-control"
                        placeholder="Check in date"
                        value={this.state.checkInDate}
                        onChange={(e) => { this.setState({ checkInDate: e.target.value }) }}
                    />
                    <input
                        type="text"
                        id="checkOutDate"
                        className="form-control"
                        placeholder="Check out date"
                        value={this.state.checkOutDate}
                        onChange={(e) => { this.setState({ checkOutDate: e.target.value }) }}
                    />

                    <Button btnLabel="Add Booking" />
                </div>
            </form >
        );
    }
}

export default NewBookingForm;