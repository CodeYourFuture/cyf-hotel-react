import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
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
