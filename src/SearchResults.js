import React from "react";
function SearchResults(props) {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">titles</th>
              <th scope="col">first name</th>
              <th scope="col">surname</th>
              <th scope="col">email</th>
              <th scope="col">room id</th>
              <th scope="col">check in date</th>
              <th scope="col">check out date</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((result, index) => {
              return (
                
                  <tr key={index}>
                    <th scope="row">{result.id}</th>
                    <td>{result.title}</td>
                    <td>{result.firstName}</td>
                    <td>{result.surname}</td>
                    <td>{result.email}</td>
                    <td>{result.roomId}</td>
                    <td>{result.checkInDate}</td>
                    <td>{result.checkOutDate}</td>
                  </tr>
            
              );
            })}
          </tbody>
        </table>
      </div>
    );
    
}
export default SearchResults;