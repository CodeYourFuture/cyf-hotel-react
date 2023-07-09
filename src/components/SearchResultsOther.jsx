import React, {useState} from "react";
import moment from "moment";

const SearchResults = (props) => {
    const array = [];
    props.results.forEach(() => {
      array.push(false);

    }) 

    /*
    imagine we have five results
      array = [false, false, false, false, false]

      highlight = array

      Each time a user clicks a row the clickHandler function is triggered below

        let's say user clicks on row 4 (index 3)
        arrToObj = { ...highlight } this translates to {0:false, 1:false, 2:false, 3:false, 4:false}
        arrToObj[3] = (
            (if false) true 
            else false
          )
        setHighlight state will now return an object

        {0:false, 1:false, 2:false, 3:true, 4:false}
        
    */
    
    const [highlight, setHighlight] = useState(array);
    const toggleHighlight = (index) => {
      const arrToObj = { ...highlight };
      console.log(arrToObj);
      arrToObj[index] = !arrToObj[index];
      setHighlight(arrToObj);
    };
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => {
            const a = moment(result.checkOutDate);
            const b = moment(result.checkInDate);
            const days = a.diff(b, "days"); // 1
            return (
              <tr
                onClick={() => toggleHighlight(index)}
                style={{
                  backgroundColor: highlight[index] ? "yellow" : "",
                }}
                key={index}
              >
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{days}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
};

export default SearchResults;