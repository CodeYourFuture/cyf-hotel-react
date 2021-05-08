/* I had help with task: L3 T19 */

import React from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import BookingNew from "./BookingNew";

import useFetch from "./useFetch";

const Bookings = () => {
  const { currentData, setNewBooking, isPending, error, search } = useFetch(
    "https://cyf-react.glitch.me"
  );

  return (
    <section className="container">
      {error && (
        <div className="alert alert-danger mt-2 text-center">{error}</div>
      )}
      {isPending && <div className="alert alert-danger">Loading...</div>}
      <div>
        <Search search={search} />
        {currentData && <SearchResults results={currentData} />}
        <BookingNew results={currentData} callback={setNewBooking} />
      </div>
    </section>
  );
};

export default Bookings;

/*
THIS IS FOR MY OWN FUTURE REFERENCE
Line 18 taught me the conditional templating in React
If the left of && is not true, then it doesn't bother with the rest
This would be really good when using asynchronous functions
*/

/*
THIS IS FOR MY OWN FUTURE REFERENCE
Before my final version, which comes from The Net Ninja, video #18 of React tutorials, I had the following:
<section className="container">
  {error && <div>{error}</div>}
    {currentBookings ? (
      <div>
        <Search search={search} />
        <SearchResults results={currentBookings} />
      </div>
      ) : (
        <span>I am a bit slow, still loading...</span>
      )}
</section>
*/
