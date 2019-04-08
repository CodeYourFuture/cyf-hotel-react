import React from "react";

const TouristInfoCards = () => {
    return (
        <section className='row'>
            <div className='xs-col-12 sm-col-4'>
                <a href='https://www.visitlondon.com/' target='_blank'>
                    <p>London</p>
                    <figure className='image-container'>
                        <img src='https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg' alt='London' />
                    </figure>
                </a>
            </div>
            <div className='xs-col-12 sm-col-4'>
                <a href='https://peoplemakeglasgow.com/' target='_blank'>
                    <p>Glasgow</p>
                    <figure className='image-container'>
                        <img src='https://ichef.bbci.co.uk/news/660/cpsprodpb/E213/production/_90057875_mediaitem90057873.jpg' alt='Glasgow' />
                    </figure>
                </a>
            </div>
            <div className='xs-col-12 sm-col-4'>
                <a href='https://www.visitmanchester.com/' target='_blank'>
                    <p>Manchester</p>
                    <figure className='image-container'>
                        <img src='https://www.visitmanchester.com/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2' alt='Manchester' />
                    </figure>
                </a>
            </div>
        </section>
    )
}


export default TouristInfoCards;