import React from 'react';

const TouristInfoCards = () => {
    return (
        <div className="my-card-wrapper">
        <div className="card">
	        <img src="https://images.unsplash.com/photo-1519783839326-713d9500be1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="card-img-top my-custom-card" />
	        <div className="card-body">
		        <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">Check Out Glasgow</a>
	        </div>
        </div>

        <div className="card">
            <img src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="card-img-top my-custom-card"/>
            <div className="card-body">
                <a href="https://www.visitlondon.com/" className="btn btn-primary">Check Out London</a>
            </div>
        </div>

        <div className="card">
            <img src="https://images.unsplash.com/photo-1559659965-415882cdb214?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" className="card-img-top my-custom-card" />
            <div className="card-body">
                <a href="https://www.visitmanchester.com/" className="btn btn-primary">Check Out Manchester</a>
            </div>
        </div>
        </div>
    )
}

export default TouristInfoCards;