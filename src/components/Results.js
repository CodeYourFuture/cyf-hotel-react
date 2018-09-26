import React from 'react';
//import { render } from 'react-dom'
import { TableHeader, TableRow } from "./table";
class Results extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      bookings: this.props.bookings,
      isActive: false,
      isLoading: true,
      err: null,
      data: null
    }
  }



  toggleClass = () => {

    this.setState(({ isActive }) => ({ isActive: !isActive }))

  }



  componentDidMount() {
    fetch('https://mire-hub.glitch.me/')
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res
        } else {
          throw new Error('HTTP error')
        }
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          data: data
        })
        console.log(data)
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          err: err
        })
      })
    }


  render() {

    // console.log(this.state.data)
    if (this.state.isLoading) {
      return <div>Loading... </div>
    } else if (this.state.err) {
      return <div>Something went wrong</div>
    } else {
      return (
        <table className="Results">
          <TableHeader />
          {
            this.state.data.map((row, key) => (
              <TableRow toggleClass={this.toggleClass} className={this.state.isActive ? "activeRow" : null} key={key} {...row} />))

          }
          {/* {console.log(this.state.isActive)} */}
        </table>

      );
    }
  }
}
  export default Results;

   




 

