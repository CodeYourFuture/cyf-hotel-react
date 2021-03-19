import React from "react";


const Heading = ()=>{
      return(
    <header className="App-header"> <h1>CYF Hotel</h1>
    <img className = "App-logo" src ="https://image.flaticon.com/icons/svg/139/139899.svg" alt="Office Building"/>
   </header>
      ); 
      
}

const TouristInfoCards = () =>{
      return (
 <div className = "cardContainer">
    <div className="card">
	    <img src="https://glasgowtourismandvisitorplan.com/media/1031/glasgowlife_58440115402.jpg" alt="Glassgow Tourism" className="card-img-top" />
	    <div className="card-body">
	    <a href="http://peoplemakeglasgow.com" className="btn btn-primary">A beautiful View of Glassgow</a>
	    </div>
    </div>

    <div className="card">
	    <img src="https://timewise.co.uk/wp-content/uploads/2017/11/Manchester-Town-Hall-380x290.jpg" alt="Manchester Powerhouse" className="card-img-top" />
	    <div className="card-body">
	    <a href="http://visitmanchester.com" className="btn btn-primary">Visit Manchester Today </a>
	    </div>
    </div>

     <div className="card">
	    <img src="https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg" alt="London Towr Bridge" className="card-img-top" />
	    <div className="card-body">
	    <a href="http://visitlondon.com" className="btn btn-primary">London, the heart of United Kingdom </a>
	    </div>
    </div>
</div>

);
    
}

const Footer = (prop) =>{
      //["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]`
    return(
        <div>
          <ul>
        {prop.footer.map((EachFooter,index) => (
          <li key={index}>{EachFooter}</li>
        ))}
      </ul>
        </div>
    )
}
const SearchResults = (prop) =>{
  console.log(prop.results)
  //id`, `title`, `first name`, `surname`, `email`, `room id`, `check in date` and `check out date`
  const BookingKeys = Object.keys(prop.results[0])
  const Bookings = prop.results;

  console.log(BookingKeys)
  return (
    <div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            {BookingKeys.map(function(bookingKey) {
              return <th scope="col">{bookingKey}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          <tr>
            {Bookings.map(function(booking) {
              console.log(booking);
              return <th scope="row">{booking["firstName"]}</th>;
            })}
            {/* {booking["firstName"]} */}
            <td>Mr.</td>
            <td>Joseph</td>
            <td>Jolly</td>
            <td>JJ@yahoo.com</td>
            <td>Room 1</td>
            <td>1/3/2021</td>
            <td>/3/2021</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mrs</td>
            <td>Linda</td>
            <td>Chris</td>
            <td>chris@yahoo.com</td>
            <td>Room 2</td>
            <td>2/3/2021</td>
            <td>4/3/2021</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Ms</td>
            <td>Josephine</td>
            <td>Jolius</td>
            <td>JJ@yahoo.com</td>
            <td>Room 3</td>
            <td>3/3/2021</td>
            <td>5/3/2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

} 




export default {Heading, TouristInfoCards, Footer, SearchResults};