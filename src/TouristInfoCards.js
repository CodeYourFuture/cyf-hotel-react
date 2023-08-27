import React from "react";

const TouristInfoCards = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img src="https://static.ffx.io/images/$zoom_0.148%2C$multiply_4%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_1/t_crop_custom/c_scale%2Cw_1100%2Cq_88%2Cf_auto/720d141fdf9bedad865921b083210fe3c71b6944" alt="Glasgow" />
                <div className="card-text">
                    <h3>Glasgow</h3>
                    <p>
                        Glasgow is a vibrant city in Scotland known for its rich cultural heritage and friendly atmosphere.
                        It offers a blend of stunning architecture, art galleries, and a lively music scene.
                        <br />
                        <a href="https://peoplemakeglasgow.com">Visit Glasgow</a>
                    </p>
                    <button>More Information</button>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.citybaseapartments.com/blog/cba-media/2016-10/shutterstock_1072210547.jpg" alt="Manchester" />
                <div className="card-text">
                    <h3>Manchester</h3>
                    <p>
                        Manchester is a city in England known for its industrial history, vibrant arts scene, and football culture.
                        It offers a mix of museums, galleries, and entertainment options.
                        <br />
                        <a href="https://visitmanchester.com">Visit Manchester</a>
                    </p>
                    <button>More Information</button>
                </div>
            </div>
            <div className="card">
                <img src="https://www.citysparespace.com/wp-content/uploads/2023/02/london.jpeg" alt="London" />
                <div className="card-text">
                    <h3>London</h3>
                    <p>
                        London, the capital of England, is a global city known for its history, culture, and iconic landmarks.
                        It offers world-class museums, theaters, shopping, and diverse culinary experiences.
                        <br />
                        <a href="https://visitlondon.com">Visit London</a>
                    </p>
                    <button>More Information</button>
                </div>
            </div>
        </div>
    );
};

export default TouristInfoCards;
