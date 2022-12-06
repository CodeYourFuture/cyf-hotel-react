import hotel from "./logo.jpg";
function Header() {
  return (
    <div id="nav_bar">
      <img id="hotel-logo" src={hotel} alt="hotel-Logo" />
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            Home
          </a>
          <a class="navbar-brand" href="#">
            Profile
          </a>
          <a class="navbar-brand" href="#">
            About
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
