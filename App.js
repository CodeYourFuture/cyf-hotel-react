import "./App.css";
import CountryData from "./component/CountryData";
import CountryScores from "./component/CountryScores";
import Header from "./component/Header";
import allCountryScores from "./data/allCountryScores";

function App() {
  allCountryScores.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(allCountryScores);
  return (
    <div className="App">
      <Header />
      {allCountryScores.map((country, index) => (
        <div key={index}>
          <CountryData name={country.name} />
          <CountryScores country={country} />
        </div>
      ))}
    </div>
  );
}

export default App;
