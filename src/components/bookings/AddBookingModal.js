import { useState } from "react";

function AddBookingModal({ addNewCustomer }) {
  const [customerInfo, setCustomerInfo] = useState({
    id: 6,
    title: "",
    firstName: "",
    surname: "",
    email: "",
    checkInDate: "2017-08-30",
    checkOutDate: "2017-10-02"
  });

  const changeState = (name, inputValue) => {
    setCustomerInfo(() => {
      let newCustomerInfo = { ...customerInfo, [name]: inputValue };
      return newCustomerInfo;
    });
  };

  const handleSubmit = e => {
    let idPlus = customerInfo.id + 1;
    setCustomerInfo(() => {
      let newCustomerInfo = { ...customerInfo, id: idPlus++ };
      return newCustomerInfo;
    });
    e.preventDefault();
    addNewCustomer(customerInfo);
  };

  let { firstName, surname, email, checkInDate, checkOutDate } = customerInfo;

  return (
    <div>
      <button
        type="button"
        className="add-btn btn btn-success"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add Booking
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-4">
              <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Titel:</label>
                  <select
                    className="form-control"
                    required
                    id="title"
                    onChange={e => changeState(e.target.id, e.target.value)}
                  >
                    <option>Open this select menu</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="MS">Ms</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Prince">Prince</option>
                    <option value="Dame">Dame</option>
                    <option value="Madam">Madam</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="Customer first name"
                    required
                    value={firstName}
                    onChange={e => changeState(e.target.id, e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="surname">Last Name :</label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    className="form-control"
                    placeholder="Customer second name"
                    required
                    value={surname}
                    onChange={e => changeState(e.target.id, e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={e => changeState(e.target.id, e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="checkInDate">Check in:</label>
                  <input
                    type="date"
                    name="checkInDate"
                    id="checkInDate"
                    className="form-control"
                    placeholder="Check In Date"
                    required
                    value={checkInDate}
                    onChange={e => changeState(e.target.id, e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="checkOutDate">Check out:</label>
                  <input
                    type="date"
                    name="checkOutDate"
                    id="checkOutDate"
                    className="form-control"
                    placeholder="Check Out Date"
                    required
                    value={checkOutDate}
                    onChange={e => changeState(e.target.id, e.target.value)}
                  />
                </div>

                <button className="btn btn-primary btn-block" type="submit">
                  Add Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBookingModal;
