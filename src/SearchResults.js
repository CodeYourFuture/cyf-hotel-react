import React, { Component } from "react";
import TableHeader from "./TableHeader.js";
import TableRow from "./TableRow";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results
    };
  }
  sortColumn = (sortBy, isColumnSorted) => {
    if (
      sortBy === "title" ||
      sortBy === "firstName" ||
      sortBy === "surname" ||
      sortBy === "email"
    ) {
      if (isColumnSorted) {
        this.setState({
          results: this.props.results.sort((a, b) =>
            a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? -1 : 1
          )
        });
      } else {
        this.setState({
          results: this.props.results.sort((a, b) =>
            a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
          )
        });
      }
    } else {
      if (isColumnSorted) {
        this.setState({
          results: this.props.results.sort((a, b) => b[sortBy] - a[sortBy])
        });
      } else {
        this.setState({
          results: this.props.results.sort((a, b) => a[sortBy] - b[sortBy])
        });
      }
    }
  };

  render() {
    return (
      <div class="table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {this.props.headerTitles.map(title => {
                return (
                  <TableHeader
                    title={title[0]}
                    columnKey={title[1]}
                    sortColumn={this.sortColumn}
                  />
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.results.map(result => {
              return <TableRow result={result} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResults;
