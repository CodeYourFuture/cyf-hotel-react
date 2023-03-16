import React, {useState,useEffect} from "react";
import Footer from "./Footer.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import TouristInfoCards from "./TouristInfoCards.js";




const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me/delayed").then(res =>
    // fetch(`https://cyf-react.glitch.me`).then(res =>
    // fetch(`https://cyf-react.glitch.me`)
      // fetch("https://cyf-react.glitch.me/delayed")
      // fetch("https://cyf-react.glitch.me/error")
  //     res.json().then(data => {
  //       console.log(data);
  //       setBookings(data);
  //     })
  //   );
  // }, []);
 

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")

    //  fetch("https://cyf-react.glitch.me")
   
    // fetch("https://cyf-react.glitch.me/error")
    
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw Error("Error fetching data");
      })
      .then(data => {
        setBookings(data);
        setDataLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setError(true);
      });
  }, []);


   
    
  

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(bookings.filter(book => (
      book.firstName.toLowerCase().includes(searchVal.toLowerCase()) || book.surname.toLowerCase().includes(searchVal.toLowerCase())
    )))
  };
 

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults results={bookings} />
      
        

        <div className="card-container">
        <TouristInfoCards town="Visit Glasgow"  link = "http://peoplemakeglasgow.com" info = "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding." imageSource = "https://img.delicious.com.au/MzilNPOR/del/2018/12/on-the-go-in-glasgow-98211-2.jpg"/>
        <TouristInfoCards town = "Visit Manchester" link = "http://visitmanchester.com" info = "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry."imageSource = "https://media.wired.co.uk/photos/6357b98e09e6f1942a2a8a9a/16:9/w_1280,c_limit/HSBC%20MANCHESTER.jpeg"/>
        <TouristInfoCards town = "Visit London" link = "http://visitlondon.com" info = "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. "imageSource = "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0"/>
        </div>
        <Footer />
       
      
       

        
 
      </div>
    </div>
  );
};

export default Bookings;
