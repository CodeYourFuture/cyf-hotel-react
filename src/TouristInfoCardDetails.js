import TouristInfoCards from "./TouristInfoCards";

const TouristInfoCardDetails = () => {
    return (
  <div className="info-cards">
      <TouristInfoCards cityName = "London" cityPic = "london.jpg" aboutCity = "London is Capital" link= "http://visitlondon.com"/>
      <TouristInfoCards cityName = "Manchester" cityPic = "manchester.jpg" aboutCity = "Manchester is nice" link="http://visitmanchester.com" />
      <TouristInfoCards cityName = "Glasgow" cityPic = "Glasgow.jpg" aboutCity = "Glasgow is the most beutiful city in the Uk" link="http://peoplemakeglasgow.com" />
    </div>
    );
}
export default TouristInfoCardDetails ;