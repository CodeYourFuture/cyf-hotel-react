import React from "react";

const myArr = [
  {
    "id": 1,
    "title": "Mr",
    "firstName": "John",
    "surname": "Doe",
    "email": "johndoe@doe.com",
    "roomId": 2,
    "checkInDate": "2017-11-21",
    "checkOutDate": "2017-11-23"
  },
  {
    "id": 2,
    "title": "Doctor",
    "firstName": "Sadia",
    "surname": "Begum",
    "email": "begum_sadia@sadia.org",
    "roomId": 1,
    "checkInDate": "2018-02-15",
    "checkOutDate": "2018-02-28"
  },
  {
    "id": 3,
    "title": "Prince",
    "firstName": "Henry",
    "surname": "Wales",
    "email": "harry@wales.com",
    "roomId": 5,
    "checkInDate": "2018-03-01",
    "checkOutDate": "2018-04-09"
  },
  {
    "id": 4,
    "title": "Dame",
    "firstName": "Judi",
    "surname": "Dench",
    "email": "Judi@dench.co.uk",
    "roomId": 6,
    "checkInDate": "2017-12-25",
    "checkOutDate": "2018-01-03"
  },
  {
    "id": 5,
    "title": "Madam",
    "firstName": "Anuradha",
    "surname": "Selvam",
    "email": "anu@selvam.net",
    "roomId": 3,
    "checkInDate": "2017-08-30",
    "checkOutDate": "2017-10-02"
  }
];

const fakeData =   [{
    "id": 1,
    "title": "Mr",
    "firstName": "John",
    "surname": "Doe",
    "email": "johndoe@doe.com",
    "roomId": 2,
    "checkInDate": "2017-11-21",
    "checkOutDate": "2017-11-23"
  }];

const headings = ['id', 'title', 'first name', 'surname', 'email', 'room id', 'check in date', 'check out date'];
const headingsKeys = ['id', 'title', 'firstName', 'surname', 'email', 'roomId', 'checkInDate', 'checkOutDate'];

function SearchResults(props) {
    
// const myArr = JSON.parse(text);   
 

return <table>
           <thead>
               <tr>
                   {headings.map((heading) => {
                            return <th scope="col">{heading}</th>;
                    })}
               </tr>
           </thead>

           <tbody>
                 {props.results.map((booking) => {
                      return (
                        <tr>
                            <th scope="row">{booking.id}</th>
                            {headingsKeys.map((heading) => {
                                  if (heading === "id") {
                                      return null;
                                  }

                                  else {
                                      return <td>{booking[heading]}</td>
                                  }
                            })}
                        </tr>
                      );  
                 })}
           </tbody>
        </table>;  
 
return (
<table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Room id</th>
      <th scope="col">Check in date</th>
      <th scope="col">Check out date</th>
    </tr>
  </thead>

  <tbody>

    <Thedata />

  </tbody>
</table>
)};

function Thedata() {
    const myArr = [
  {
    "id": 1,
    "title": "Mr",
    "firstName": "John",
    "surname": "Doe",
    "email": "johndoe@doe.com",
    "roomId": 2,
    "checkInDate": "2017-11-21",
    "checkOutDate": "2017-11-23"
  },
  {
    "id": 2,
    "title": "Doctor",
    "firstName": "Sadia",
    "surname": "Begum",
    "email": "begum_sadia@sadia.org",
    "roomId": 1,
    "checkInDate": "2018-02-15",
    "checkOutDate": "2018-02-28"
  },
  {
    "id": 3,
    "title": "Prince",
    "firstName": "Henry",
    "surname": "Wales",
    "email": "harry@wales.com",
    "roomId": 5,
    "checkInDate": "2018-03-01",
    "checkOutDate": "2018-04-09"
  },
  {
    "id": 4,
    "title": "Dame",
    "firstName": "Judi",
    "surname": "Dench",
    "email": "Judi@dench.co.uk",
    "roomId": 6,
    "checkInDate": "2017-12-25",
    "checkOutDate": "2018-01-03"
  },
  {
    "id": 5,
    "title": "Madam",
    "firstName": "Anuradha",
    "surname": "Selvam",
    "email": "anu@selvam.net",
    "roomId": 3,
    "checkInDate": "2017-08-30",
    "checkOutDate": "2017-10-02"
  }
]; 
        let N = myArr.map(element => `<tr><td>${element.title}xxx</td></tr>`)

        return N
}
export default SearchResults;