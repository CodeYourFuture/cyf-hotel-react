import React, {Component} from 'react';
import moment from 'moment'
 class SearchResults extends Component {
  constructor() {
    super();
    this.state = {};
  }

   selection = event => {
     this.setState(previousState => {
       return { selected: !previousState.selected };
    });

    this.state.selected
      ? (event.target.parentNode.className = "bg-light")
      : (event.target.parentNode.className = "");
  };

 
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th>Stay duration</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map(result => {
            return (
              <tr className={result.id}  onClick={this.selection}>
                <th scope="row">{result.id}</th>
                <td >{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(
                    moment(result.checkInDate),
                    'days'
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
// const SearchResults = (props) => {

//   return (
//     <div>
//       <table class="table">
//         <thead>
//           <tr>
//             <th scope="col">Id</th>
//             <th scope="col">Title</th>
//             <th scope="col">First Name</th>
//             <th scope="col">Surname</th>
//             <th scope="col">Email</th>
//             <th scope="col">Room Id</th>
//             <th scope="col">Check in date</th>
//             <th scope="col">Check out date</th>
//             <th scope="col">Total of stayed days</th>
//           </tr>
//         </thead>
//         <tbody>

//           {props.results.map(result => {
//             return (<tr>
//               <th scope="row">{result.id}</th>
//               <td>{result.title}</td>
//               <td>{result.firstName}</td>
//               <td>{result.surName}</td>
//               <td>{result.email}</td>
//               <td>{result.roomId}</td>
//               <td>{result.checkInDate}</td>
//               <td>{result.checkOutDate}</td>
//               <td>{moment(result.checkOutDate).diff(result.checkInDate, 'days')}</td>
//             </tr>)
//           })}

//         </tbody>
//       </table>
//     </div >)

// }

export default SearchResults;
