import React from "react";

const TouristInfoCards = () => {
    return (
        <section className='row'>
            <div className='xs-col-12 sm-col-4'>
                <figure className='image-container'>
                    <img src='https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg' alt='London' />
                </figure>
                <div class="card-body">
                    <h5 class="card-title">London</h5>
                    <p class="card-text">Visiting London for the first time?  We’ve come up with some ideas of things you should see and do while you are in the city - be sure to add them to your list!</p>
                    <a href='https://www.visitlondon.com/' target='_blank' class="btn btn-primary">Visit London</a>
                </div>
            </div>
            <div className='xs-col-12 sm-col-4'>
                <figure className='image-container'>
                    <img src='https://ichef.bbci.co.uk/news/660/cpsprodpb/E213/production/_90057875_mediaitem90057873.jpg' alt='Glasgow' />
                </figure>
                <div class="card-body">
                    <h5 class="card-title">Glasgow</h5>
                    <p class="card-text">Visiting Glasgow for the first time?  We’ve come up with some ideas of things you should see and do while you are in the city - be sure to add them to your list!</p>
                    <a href='https://peoplemakeglasgow.com/' target='_blank' class="btn btn-primary">Visit Glasgow</a>
                </div>

            </div>
            <div className='xs-col-12 sm-col-4'>
                <figure className='image-container'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1u2v3Poqi8gSsKb4C3nIXBpPQtSYdMbLjLDg5Aq2lMbl_R7xyw' alt='Manchester' />
                </figure>
                <div class="card-body">
                    <h5 class="card-title">Glasgow</h5>
                    <p class="card-text">Visiting Manchester for the first time?  We’ve come up with some ideas of things you should see and do while you are in the city - be sure to add them to your list!</p>
                    <a href='https://www.visitmanchester.com/' target='_blank' class="btn btn-primary">Visit Manchester</a>
                </div>
            </div>
        </section>
    )
}


export default TouristInfoCards;