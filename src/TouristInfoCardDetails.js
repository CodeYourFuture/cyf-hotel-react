import TouristInfoCards from "./TouristInfoCards";
import LondonPic from './img/london.jpg'
import ManchesterPic from './img/manchester.jpg'
import GlasgowPic from './img/Glasgow.jpg'
const TouristInfoCardDetails = () => {
    return (
  <div className="info-cards">
      <TouristInfoCards cityName = "London" cityPic = {LondonPic} aboutCity = "London is Capital" link= "http://visitlondon.com"/>
      <TouristInfoCards cityName = "Manchester" cityPic = {ManchesterPic} aboutCity = "Manchester is nice" link="http://visitmanchester.com" />
      <TouristInfoCards cityName = "Glasgow" cityPic = {GlasgowPic} aboutCity = "Glasgow is the most beutiful city in the Uk" link="http://peoplemakeglasgow.com" />
    </div>
    );
}
export default TouristInfoCardDetails ;