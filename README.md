This is the `react` frontend for the [CYF-Hotel](https://github.com/CodeYourFuture/cyf-hotel).


![Bookings Search page](Bookings.png)

# Installation

1. Follow [the instructions](https://codeyourfuture.github.io/syllabus-master/others/making-a-pull-request.html#how-to-fork-a-github-repo) to fork & clone the GitHub repo
2. Install the dependencies by running `npm install`
3. Launch server using `npm start`
4. It should automatically open http://localhost:3000/

# Exercises

### Lesson 1

1. Extract the `<button>` in the `src/components/Search.js` component to be it's own separate component

2. Add another search form to the `Search` component. The new search form will search for bookings by name. You *don't* need to implement the search functionality yet

3. Create a Results component that shows a table of results. Show it on the Bookings page using hard coded data. Hint: look in `src/containers/Bookings.js` for where to load it. Be sure to split out your components, similar to the method used in exercise 1

4. Instead of hard-coding data in the `Bookings` component, load data from the `fakeBookings.json` file. Hint: look in the `Bookings` component for how to import data from a JSON file. Pass it to the `Results` component using *props* and show all of the fake bookings

5. Add another column to your results table which shows the number of days each booking is staying. (Hint: try installing the [moment.js library](http://momentjs.com/) and using the [`.diff()` method](http://momentjs.com/docs/#/displaying/difference/) to compare dates)

### Lesson 2

6. Filter the bookings by the customer id, by using *state* to control which results are seen. So for example, if you type `1` into the customer id search input, you will only see John Doe's booking

7. Do the same to allow the bookings to be filtered by the customer's name. Make sure that you check the whole name (`firstName` and `surname`) in the search

8. Add a counter above the results table which shows the number of results that match the search filter

9. Add a click handler to each row in the results table that allows the user to "select" the row (and highlight with a different color). When clicking on the row for a second time, "unselect" the row. Above the table, show a count of the number of selected rows

### Lesson 3

9. Instead of loading fake data, use `fetch()` to get data from the API that you built in your [Node homework](https://github.com/CodeYourFuture/cyf-hotel). Hint: ensure that you are running both the Node server (`npm start`) **and** your React app

10. Show a loading state while the data from the server is being fetched. To test this, try loading data from `https://mire-hub.glitch.me`, which has a 5 second delay before returning the data

11. Display an error message if there is an HTTP error when fetching data from the server. To test this, try loading data from `https://river-interest.glitch.me`, which will return a 500 HTTP error

12. Add a click handler to the columns of the result table, which sorts the results ascending (A -> Z). Clicking the column again will reverse the sort order to descending (Z -> A). Hint: try using the `.sort()` method with a callback to do custom sorting

### Stretch Goals

1. Add a form with inputs for each of the booking fields (first name, last name, title, room id, check in date, check out date) to the bottom of the page. Submitting the form adds the booking to the result table. Note that the new booking won't persist if you refresh the page

2. Fix the bug from Stretch Goal 1 by making the form send a POST request to your Node server that saves the booking in the database
