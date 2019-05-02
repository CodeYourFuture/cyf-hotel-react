import React from "react";
import moment from "moment";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRow:undefined
            
        }
    }
    handler (result){
        this.setState({
            currentRow: result.id
        });

    }

  render() {
    return (
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Tittle</th>
            {/* <th scope="col">Handle</th> */}
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Update-staying</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map(result => {
            const currentRow = result.id === this.state.currentRow;
            return (
              <tr
                className={currentRow ? "Selected" : "unselected"}
                onClick={() => this.handler(result)}
              >
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(result.checkInDate, "days")}{" "}
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
