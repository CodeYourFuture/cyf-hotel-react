import React from "react";
const AddNew = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Add Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group">
            <label htmlFor="customerName">New Customer</label>
            <div className="search-rows">
              <tr className="box">
                <p scope="co1"> Title: </p>
                <select>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Professor">Professor</option>
                  <option value="Prince">Prince</option>
                  <option value="Dame">Dame</option>
                  <option value="Madam">Madam</option>
                </select>
                <div />
                <p> FirstName:</p>
                <input type="text" />
                <p scope="co1"> SureName:</p>
                <input type="text" />
              </tr>
              <tr className="box">
                <p scope="co1"> Email: </p>
                <input type="Email" />
                <p scope="co1"> Phone number: </p>
                <input type="Number" />
              </tr>
              <tr className="box">
                <p scope="co1"> Room: </p>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <p scope="co1"> Check In Date: </p>
                <input type="Date" />
                <p scope="co1"> Check Out Date: </p>
                <input type="Date" />
              </tr>
            </div>
            <button className="btn btn-primary add">Add New</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddNew;
