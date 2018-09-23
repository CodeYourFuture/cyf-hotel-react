
import React, { Component } from 'react';
import moment from 'moment';

class Results extends Component {
  
  state={
    selected:[],
    row:[],
    results:this.props.results,
    isRowToggled:false
  }

  handleClick =(e)=>{
    // if(handleClick%2==0){
    //   return this.state.onClick
    // } else{
    //   return this.state.default
    // }
    this.setState({
      isRowToggled:!this.state.isRowToggled
     
    })

  }
  render() {
    
   
    return (
      <table className="table">
        <thead>
          <tr>

            <th>title</th>
            <th>firstname</th>
            <th>surname</th>
            <th>email</th>
            <th>roomId</th>
            <th>checkInDate</th>
            <th>checkOutDate</th>
            <td>Durations stayed in</td>
          </tr>
        </thead>
        <tbody>
          {this.state.results.map(result => {

            return (
              <tr 
                onClick={this.handleClick}
                className={this.state.isRowToggled ? "onClick" : null}
              >


                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{moment([result.checkOutDate]).diff(moment([result.checkInDate]), 'days')}</td>

              </tr>
            )
          })}
        </tbody>
      </table>

    )
  }
}

export default Results;


// // Create a Results component that shows a table of results. 
// Show it on the Bookings page using hard coded data.
//  Hint: look in `src/containers/Bookings.js` for where to load it. 
//  Be sure to split out your components, similar to the method used in exercise 1








