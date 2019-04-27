import React from "react";
import moment from "moment";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRows: []
    };
  }

  onClickHandler = clickedId => {
    let selectedRows = [].concat(this.state.selectedRows);
    const selectedIndex = selectedRows.findIndex(id => {
      return id === clickedId;
    });

    /**
     *  if row already selected
     *  remove from array of selected rows
     */

    if (selectedIndex !== -1) {
      selectedRows.splice(selectedIndex, 1);
    } else {
      // if not already selected, add to array
      selectedRows.push(clickedId);
    }

    this.setState({ selectedRows });
  };

  render() {
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">Stay</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map(result => {
            const isSelected = this.state.selectedRows.find(id => {
              return id === result.id;
            });
            const rowClasses = isSelected ? "row--selected" : "";

            return (
              <tr
                onClick={() => this.onClickHandler(result.id)}
                className={rowClasses}
                key={result.id}
              >
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surename}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(result.checkInDate, "days")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default SearchResults;
