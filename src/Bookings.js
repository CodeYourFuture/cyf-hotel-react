import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(prev => prev.filter(item => item.firstName.toLowerCase() === searchVal || item.surname.toLowerCase() === searchVal))
  };

  const [showProfile, setShowProfile] = useState();
    function clientProfile(id) {
      setShowProfile(id);
      console.log(id);
    }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
