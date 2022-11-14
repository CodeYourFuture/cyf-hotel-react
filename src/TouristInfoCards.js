import React from "react";

const TouristInfoCards = () =>
{
    return (
    <div className="all-cards">
        <div className="card">
            <img src="https://media.istockphoto.com/id/469974825/photo/squinty-bridge-glasgow.jpg?s=612x612&w=0&k=20&c=or3NNSPV7Q-t1lZ5Z6UITQZ5Q3KoF35Je5wq9-fSrvg=" className="card-img-top"/>
            <h1>Glasgow</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="card-body">
                <a href="peoplemakeglasgow.com" className="btn btn-primary">More Information</a>
            </div>
        </div>

        <div className="card">
            <img src="https://media.istockphoto.com/id/1356237947/photo/aerial-view-of-manchester-city-in-uk.jpg?s=612x612&w=0&k=20&c=q5Fb-JulqWjCI4VaFoey7QYYwvR29eAmJjfBNLo3nSA=" className="card-img-top"/>
            <h1>Manchester</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="card-body">
                <a href="visitmanchester.com" className="btn btn-primary">More Information</a>
            </div>
        </div>

        <div className="card">
            <img src="https://media.istockphoto.com/id/1367803120/photo/elevated-panoramic-sunrise-view-of-the-skyline-of-london-city.jpg?s=612x612&w=0&k=20&c=x7ZA6RBdhoKF8sLTFxfHfNU9um2R3fS_MZR0j0X8t4A=" className="card-img-top"/>
            <h1>London</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="card-body">
                <a href="visitlondon.com" className="btn btn-primary">More Information</a>
            </div>
        </div>
    </div>
    )
}
  
export default TouristInfoCards;
