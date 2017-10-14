import React, { Component } from "react";
import moment from "moment";
import ResultTableHeaders from "./ResultTableHeaders";
import ResultTableRows from "./ResultTableRows";

//to claculate the number of days that a customer has reserved/booked
const calculateDateDifference = reservations => {
  reservations.map(reservation => {
    let checkOutDate = moment(reservation.checkOutDate);
    let checkInDate = moment(reservation.checkInDate);
    //calculate the difference and include the result,totalDays, to the reservation object
    reservation.totalDays = checkOutDate.diff(checkInDate, "days");
  });
};

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRowSelected: 0 //for tracing number of rows selected
    };
  }
  //handles when there is a change in the number of rows selected/deselected
  updateNumberOfRowsSelected = numberOfRowSelected => {
    this.setState({
      numberOfRowSelected
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Results &#40;{" "}
              <span className="text-primary">
                {this.props.numberOfResults}{" "}
              </span>{" "}
              Found &#41; &mdash;{" "}
              <span className="text-danger">
                {this.state.numberOfRowSelected}{" "}
              </span>{" "}
              Selected
            </p>

            {/*calculate the total days between the check_in_date and check_out_date and map it with each reservation object*/}
            {calculateDateDifference(this.props.reservations)}

            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  {/* use the first object's keys as the value for the table heading*/}
                  <ResultTableHeaders
                    resultHeading={Object.keys(this.props.reservations[0])}
                    onClick={this.props.headerclick}
                  />
                </tr>
              </thead>
              <tbody id="rows">
                {this.props.reservations.map((reservation, i) => (
                  <ResultTableRows
                    key={i}
                    reservations={reservation}
                    /*will be used to identify each row during selection/deselection*/
                    index={i}
                    /* to be able to modify the state of the parent from child */
                    updateNumberOfRowsSelected={this.updateNumberOfRowsSelected}
                    numberOfRowSelected={this.state.numberOfRowSelected}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
