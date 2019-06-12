import React from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredarray: [],
      bookings: []
    };
  }
  componentDidMount() {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => this.setState({ bookings: data }));
  }

  render() {
    // const search=(searchVal)=>{console.log(searchVal.toUpperCase())}
    const search = searchVal => {
      console.log(this.state.bookings);
      console.log(JSON.stringify(searchVal).replace(/\s/g, ""));
      console.log(
        this.state.bookings.filter(
          item => item.title === JSON.stringify(searchVal).replace(/\s/g, "")
        )
      );
      console.log(this.state.bookings.filter(item => item.id === 1));
      // console.log(this.result)
      this.setState({
        filteredarray: this.state.bookings.filter(item => item.title === "Mr")
      });
    };
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults fakeBookingsList={this.state.filteredarray} />
        </div>
      </div>
    );
  }
}

export default Bookings;
