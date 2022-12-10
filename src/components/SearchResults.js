import React from "react";
import Moment from "moment";

const SearchResult = ({ results }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">firstname</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room Id</th>
          <th scope="col">checkin date</th>
          <th scope="col">check out date</th>
          <th scope="col">number of night</th>
        </tr>
      </thead>
      <tbody>
        {results.map((element, index) => {
          // getTrProps={(state, rowInfo) => {
          //   if (rowInfo && rowInfo.row) {
          //     return {
          //       onClick: (e) => {
          //         this.setState({
          //           selected: rowInfo.index
          //         })
          //       },
          //       style: {
          //         background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
          //         color: rowInfo.index === this.state.selected ? 'white' : 'black'
          //       }
          //     }
          //   }else{
          //     return {}
          //   }
          // }

          return (
            <tr key={index}>
              <th scope="row">{element.id}</th>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>
              <td>{checkDiff(element.checkInDate, element.checkOutDate)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

let checkDiff = (InDate, OutDate) => {
  const checkInDate = Moment(InDate, "YYYY-MM-DD");
  const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
  const diff = checkOutDate.diff(checkInDate, "days");
  return diff;
};

export default SearchResult;
