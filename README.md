A hotel booking application in React. Homework for the [CodeYourFuture React module](https://codeyourfuture.github.io/syllabus-master/react/)

![Bookings Search page](Bookings.png)

# Installation

1. Follow [the instructions](https://codeyourfuture.github.io/syllabus-master/others/making-a-pull-request.html#how-to-fork-a-github-repo) to fork & clone the GitHub repo
2. Install the dependencies by running `npm install`
3. Launch server using `npm start`
4. It should automatically open http://localhost:3000/

# Exercises

### Lesson 1

1. Extract the `<button>` in the `src/Search.js` component to be its own separate component.

2. Extract the `<header>` in the `src/App.js` to be its own separate component called `Heading`. Make sure that you import and render the `<Heading />` component within `src/App.js`. In the `Heading` component, render the hotel's logo in an `<img>` (you can use `https://image.flaticon.com/icons/svg/139/139899.svg` or find your own image URL). You can adjust the CSS by editing `src/App.css` to make your Heading looks better if necessary.

3. In `src/App.js`, above the `<Bookings />` component add a new component called `TouristInfoCards` which shows 3 _cards_. A card is a common user interface pattern with an image at the top and some related text underneath. The cards must link to `peoplemakeglasgow.com`, `visitmanchester.com` and `visitlondon.com`. The cards should contain the name of the city and an image of the city (use the same className as the example below to benefit from [Bootstrap](https://getbootstrap.com/docs/4.2/components/card) library which is already imported for you in the project). Use the JSX code below as an example of one card (note that in JSX, you'll need to use `className` instead of `class`):

```
<div className="card">
	<img src="..." className="card-img-top" />
	<div className="card-body">
		<a href="#" className="btn btn-primary">Go somewhere</a>
	</div>
</div>
```

4. Add a `<Footer />` component at the bottom of the page. Pass the following array as a prop to this component: `["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]`. Inside the component, use the data you passed as a prop to render a `<ul>` list with each item of the array displayed as a `<li>`. Hint: the `.map()` method will by useful.

5. Create a `<SearchResults />` component that shows hotel bookings in a `<table>` element. Each booking will have an id, title, first name, surname, email, room id, check in date and check out date. You can make up data to show in the table. Then show `<SearchResults />` component within the `<Bookings />` component that is provided for you. Be sure to split out your components into small well-named components, similar to the method used in exercise 1. Hint: You will find some useful `<table>` examples in the [Bootstrap documentation for tables](https://getbootstrap.com/docs/4.2/content/tables/#examples)

6. Instead of using your hard-coded data in the `<SearchResults />` component, load data from the `src/data/fakeBookings.json` file in the `<Bookings />` component and pass it as a prop to `<SearchResults />`. Hint: look in the `<Bookings />` component for how to import data from a JSON file.

7. Add another column to your `<SearchResults />` table which shows the number of days each booking is staying. Hint: try installing the [moment.js library](http://momentjs.com/) (you'll need to install it with `npm install moment --save`) and using the [`.diff()` method](http://momentjs.com/docs/#/displaying/difference/) to compare dates

### Lesson 2

8. Within `src/App.js`, render the `<Restaurant />` component (that is provided for you in `src/Restaurant.js`) underneath the `<Bookings />` component. Then convert the `<Restaurant />` component to a class component.

9. Add a method to the `Restaurant` class named `addOrder`. Use `console.log` to log a "Add order" message. Remember to use the `addOrder = () => {}` syntax. Add a `onClick` handler to the Add `<button>` that calls `this.addOrder`. Ensure that clicking on the button logs your "Add order" message in the console.

10. Extract the `<button>` in the `<Restaurant />` component to a new component named `RestaurantButton`. Pass the `this.addOrder` method as a prop to the `<RestaurantButton />` component and use this prop in the `onClick` handler. Ensure that clicking the button still logs the "Add order" message.

11. Within the `<Restaurant />` component, initialise state to have a key named `orders` and a value of 0 (hint: use the `constructor` method). Then replace the `orders` variable within the `render` method with `this.state.orders` that we just created.

12. Within the `addOrder` method of `<Restaurant />`, use the `this.setState` method to increment the `orders` state by 1. Hint: remember that if we are using previous state to calculate the new state, we must use a callback function with `this.setState`.

13. Extract the `<li>` containing "Pizzas" within the `<Restaurant />` component to a new component named `Order`. Move `orders` initial state set up in the `constructor` and the `addOrder` method from `<Restaurant />` to the new `<Order />` component. Make sure that clicking the "Add" button still increments the number of orders. Then replace the hard-coded string "Pizzas" in `<Order />` with a prop named `orderType`. Finally, render another `<Order />` component but this time with the prop `orderType="Salads"`.

14. Within the `<SearchResults />` component or it's child components, add an `onClick` handler to each row in the table (hint: on the `<tr>` element). When clicked, the row is "selected" and highlighted with a different colour. Hint: use state to add a class to the `className`. When clicking on the row for a second time, "unselect" the row and remove the coloured highlighting.

### Lesson 3

15. Within your `<Header />` component, render the `<Clock />` component (that is provided for you in `src/Clock.js`). Fix the problem where the `setTimeout` timer is not **cleared** if the component is **unmounted**. Hint: look at the Clock exercise you did in class.

16. Convert the `src/Search.js` component into a class component. Add a `constructor` method and initialise a new state `searchInput` to an empty string `''`. Add a `value` property to the `<input>` that you set to your new `searchInput` state. Then create a new method `handleSearchInput` taking an `event` parameter. This method should use `setState` to update the state `searchInput` with what the user typed in the input (hint: use `event.target.value` to get the input value). Finally add a `onChange` property to the `<input>` set to the method `handleSearchInput`.

17. Still in the `<Search />` component, add an `onSubmit` handler to the `<form>` element. When the form is submitted (try clicking the search button), get the value of the state `searchInput` and pass it as a parameter to the `this.props.search` prop function that has been provided for you. Look in the console, you should see the text that is typed in the search box when submitting the form (note: also your submit handler should take an `event` parameter and add the line `event.preventDefault()` to prevent the browser to implicitely submit the form).

18. In the `<Bookings />` component, use state to hold the `FakeBookings` data instead of directly passing it to `<SearchResults />`. Hint: use a `constructor` method to initialise the state with the `FakeBookings` variable.

19. Still in the `<Bookings />` component, implement the `search` method. It must use the `searchVal` (that you just passed from the `<Search />` component) to **filter** the search results. The filter function should return results where `firstName` or `surname` match `searchVal`. Once filtered, use `this.setState` to update the results rendered in `<SearchResults />`.

20. Again in the `<Bookings />` component, use the `fetch()` function to get data from `https://cyf-react.glitch.me`. Hints:

- Replace `FakeBookings` in the state initialise with `null` (because we haven't fetched any results yet!)
- Add a `componentDidMount()` method that calls the `fetch()` function and then use `.then()` to handle the response. Try looking at your Pokemon app that you worked on in class for an example
- When the response comes back use `this.setState` to update the results

21. Now show a _loading state_ in `<Bookings />` while the data from the server is being fetched. To test this, try loading data from `https://cyf-react.glitch.me/delayed`, which has a 5 second delay before returning the data. Hint: try looking at your Pokemon app that you worked on in class for an example

22. Finally, display an error message in `<Bookings />` if there is an HTTP error when fetching data from the server. To test this, try loading data from `https://cyf-react.glitch.me/error`, which will return a 500 HTTP error. Hint: Try looking at your Pokemon app that you worked on in class for an example

### Stretch Goals

1. Add a form with `<input>`s for each of the booking fields (first name, surname, title, room id, check in date, check out date) to the bottom of the page. Submitting the form adds the booking to the result table. Note that the new booking won't persist if you refresh the page.

2. Add an `onClick` handler to the columns of the result table, which sorts the results ascending (A -> Z). Clicking the column again will reverse the sort order to descending (Z -> A). Hint: try using the `.sort()` method with a callback to do custom sorting
