import React from "react";

function SearchResults(){
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mr</td>
            <td>Otto</td>
            <td>Mdo</td>
            <td>mondo121@hotmail.com</td>
            <td>Room1201</td>
            <td>12/3/2023</td>
            <td>23/03/2023</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mr</td>
            <td>Moon</td>
            <td>Joy</td>
            <td>mondo121@hotmail.com</td>
            <td>Room11</td>
            <td>05/3/2023</td>
            <td>11/03/2023</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mrs</td>
            <td>Olivia</td>
            <td>Mikes</td>
            <td>oliveandcheese@gmail.com</td>
            <td>Room201</td>
            <td>1/05/2023</td>
            <td>23/05/2023</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Ms</td>
            <td>Joan</td>
            <td>Jumps</td>
            <td>Joju@gmail.com</td>
            <td>Room1201</td>
            <td>01/03/2023</td>
            <td>03/03/2023</td>
          </tr>
        </tbody>
      </table>
    );
}
export default SearchResults;