import React, { Component } from "react";
import * as moment from "moment";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class SearchResults extends Component {
  state = {
    indexRow: null
  };
  addClass = e => {
    this.setState({
      indexRow: this.state.indexRow === e ? null : e
    });
  };

  render() {
    const { results, massegeError, toMakeSort, isTrue } = this.props;

    return results.length <= 0 ? (
      <div className="container">
        <div id="container-loading">
          <h1 className="title">Loading</h1>
          <div className="loading">
            <div className="loading">
              <div className="loading" />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th name="id" scope="col">
                #
              </th>
              <th scope="col">Title</th>
              <th value="firstName" scope="col">
                First Name
              </th>
              <th scope="col">surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check In Date</th>
              <th scope="col">Check Out Date</th>
              <th scope="col">Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th name="id" scope="row">
                <span name="id" onClick={n => toMakeSort(n)}>
                  Sort{" "}
                  {isTrue ? (
                    <i className="fas fa-sort-up" />
                  ) : (
                    <i className="fas fa-sort-down" />
                  )}
                </span>
              </th>
              <td>
                <span name="title" onClick={n => toMakeSort(n)}>
                  Sort
                  {isTrue ? (
                    <i className="fas fa-sort-up" />
                  ) : (
                    <i className="fas fa-sort-down" />
                  )}
                </span>
              </td>
              <td>
                <span name="firstName" onClick={n => toMakeSort(n)}>
                  Sort
                  {isTrue ? (
                    <i className="fas fa-sort-up" />
                  ) : (
                    <i className="fas fa-sort-down" />
                  )}
                </span>
              </td>
              <td>
                <span name="surname" onClick={n => toMakeSort(n)}>
                  Sort
                  {isTrue ? (
                    <i className="fas fa-sort-up" />
                  ) : (
                    <i className="fas fa-sort-down" />
                  )}
                </span>
              </td>
              <td>
                <span name="email" onClick={n => toMakeSort(n)}>
                  Sort
                  {isTrue ? (
                    <i className="fas fa-sort-up" />
                  ) : (
                    <i className="fas fa-sort-down" />
                  )}
                </span>
              </td>
              <td>
                <span name="roomId" onClick={n => toMakeSort(n)}>
                  Sort
                  {isTrue ? (
                    <i className="fas fa-sort-up" />
                  ) : (
                    <i className="fas fa-sort-down" />
                  )}
                </span>
              </td>
              <td>
                <span name="checkInDate" onClick={n => toMakeSort(n)}>
                  Sort
                  {isTrue ? (
                    <i className="fas fa-sort-up" />
                  ) : (
                    <i className="fas fa-sort-down" />
                  )}
                </span>
              </td>
              <td>
                <span name="checkOutDate" onClick={n => toMakeSort(n)}>
                  Sort
                  {isTrue ? (
                    <i className="fas fa-sort-up" />
                  ) : (
                    <i className="fas fa-sort-down" />
                  )}
                </span>
              </td>
              <td>
                <span onClick={n => toMakeSort(n)}>
                  Sort
                  {isTrue ? (
                    <i className="fas fa-sort-up" />
                  ) : (
                    <i className="fas fa-sort-down" />
                  )}
                </span>
              </td>
            </tr>
            {this.props.results.map((item, index) => {
              return (
                <React.Fragment key={item.id}>
                  <tr
                    className={
                      this.state.indexRow === index ? "selected" : null
                    }
                    onClick={() => this.addClass(index)}
                  >
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.firstName}</td>
                    <td>{item.surname}</td>
                    <td>{item.email}</td>
                    <td>{item.roomId}</td>
                    <td>{item.checkInDate}</td>
                    <td>{item.checkOutDate}</td>
                    <td>
                      {moment(item.checkOutDate).diff(item.checkInDate, "day")}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
        {massegeError ? (
          <div className="text-center text-danger">{massegeError}</div>
        ) : null}
      </div>
    );
  }
}
