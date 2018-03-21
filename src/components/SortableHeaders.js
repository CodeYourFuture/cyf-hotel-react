import React, { Component } from "react";

class SortableHeaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "asc"
    };
  }

  render() {
    return (
      <thead>
        <tr>
          <th
            onClick={() => {
              this.props.sortBy("tittle", this.state.direction);
              this.setState({
                direction: this.state.direction === "asc" ? "desc" : "asc"
              });
            }}
          >
            Title
          </th>
          <th
            onClick={() => {
              this.props.sortBy("firstname", this.state.direction);
              this.setState({
                direction: this.state.direction === "asc" ? "desc" : "asc"
              });
            }}
          >
            Firstname{" "}
          </th>

          <th
            onClick={() => {
              this.props.sortBy("surname", this.state.direction);
              this.setState({
                direction: this.state.direction === "asc" ? "desc" : "asc"
              });
            }}
          >
            Surname
          </th>
          <th
            onClick={() => {
              this.props.sortBy("eamil", this.state.direction);
              this.setState({
                direction: this.state.direction === "asc" ? "desc" : "asc"
              });
            }}
          >
            Email
          </th>

          <th
            onClick={() => {
              this.props.sortBy("room_id", this.state.direction);
              this.setState({
                direction: this.state.direction === "asc" ? "desc" : "asc"
              });
            }}
          >
            Room ID
          </th>
          <th
            onClick={() => {
              this.props.sortBy("check_in_date", this.state.direction);
              this.setState({
                direction: this.state.direction === "asc" ? "desc" : "asc"
              });
            }}
          >
            check in date
          </th>
          <th
            onClick={() => {
              this.props.sortBy("check_out_date", this.state.direction);
              this.setState({
                direction: this.state.direction === "asc" ? "desc" : "asc"
              });
            }}
          >
            check out date
          </th>
          <th
            onClick={() => {
              this.props.sortBy("duration", this.state.direction);
              this.setState({
                direction: this.state.direction === "asc" ? "desc" : "asc"
              });
            }}
          >
            Total DaysIN
          </th>
        </tr>
      </thead>
    );
  }
}

export default SortableHeaders;
