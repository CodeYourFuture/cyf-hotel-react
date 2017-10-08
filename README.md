This is the `react` frontend for the [CYF-Hotel](https://github.com/CodeYourFuture/cyf-hotel).


![Bookings Search page](Bookings.png)

# Installation

Install the dependencies by running `yarn`.

Launch server using `yarn start` and go to http://localhost:3000/

# Exercises 

1- Change the button on the `Search.js` page to be a separate component

2- Add `search by name` form to the file `Search.js`

3- Create a results table component and show it on the Bookings page using hard coded data. Be sure to split out your components, similar to the method used in (1)

4- Load data from the `fakeBookings.json` and pass it to the Results table using `Props`

5- Use `State` to only show the results after search has been clicked

6 - Calculate number of days staying by adding an additional column to your table row.

7 - Sorting. When pressing a column, it should order the results alphabetically, ascending. Pressing it again should order the column descending. 

8 - Multi-select and count of rows. When you press on each row, mark it as selected (maybe change the color). When you press on the same row, it should become unselected. 
A total counter of all selected rows should update at the top of the table (next to `5 results found`)

9 - Use your existing API to search for results. Make sure you show a `Loading` message somewhere whenever there is a fetch to the API in process.

10 - Display an error message when there is a problem fetching from the server.
