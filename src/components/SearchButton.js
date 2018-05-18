import React from "react";
//function SearchButton() {
// return <button className="btn btn-primary fn-submit-name">{props.name}</button>}
// const SearchButton = props => (
//   <div>
//     <label htmlFor="customerId">{props.name}</label>
//     <div className="search-row">
//       <input
//         type="text"
//         id={props.name}
//         className="form-control"
//         placeholder={props.name}
//       />
//       <button className="btn btn-primary fn-submit-name">{props.search}</button>
//     </div>
//   </div>
// );

class SearchButton extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="customerId">{this.props.name}</label>
        <div className="search-row">
          <input
            type="text"
            id={this.props.name}
            className="form-control"
            placeholder={this.props.name}
          />
          <button className="btn btn-primary fn-submit-name">
            {this.props.search}
          </button>
        </div>
      </div>
    );
  }
}
export default SearchButton;
