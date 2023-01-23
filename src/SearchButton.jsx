import React from "react";

// const SearchButton = ({ name }) => {
//   return <button className="btn btn-primary">{name}</button>;
// };

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button className="btn btn-primary">{this.props.name}</button>;
  }
}
export default SearchButton;
