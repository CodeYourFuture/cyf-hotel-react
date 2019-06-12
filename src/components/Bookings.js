import React from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      filteredarray: [],
      bookings: [],
      error:null,
    };
  }
  componentDidMount() {
    fetch("https://cyf-react.glitch.me").then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res;
      } else {
        throw new Error("HTTP error");
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ bookings: data,
      isLoading:false })).catch((error) => this.setState({ isLoading: false, error: error }));
  }

  render() {
    const search = searchVal => {
      this.setState({
        filteredarray: this.state.bookings.filter(item =>{if(String(item.firstName).toLowerCase() === String(searchVal).trim().toLowerCase() 
          || String(item.surname).toLowerCase() === String(searchVal).trim().toLowerCase())
      return item})
    })}
    if (this.state.isLoading === true)return <span>LOADING.....</span>
    else if (this.state.error)return <span>500 HTTP error.</span>
    else
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
