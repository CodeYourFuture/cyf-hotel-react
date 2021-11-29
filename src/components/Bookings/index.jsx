import FakeBookings from "../../data/fakeBookings.json";
import Search from "./Search-Form";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <section className="container py-5">
      <h3>Search Bookings</h3>
      <Search search={search} />
      <SearchResults results={FakeBookings} />
    </section>
  );
};

export default Bookings;
