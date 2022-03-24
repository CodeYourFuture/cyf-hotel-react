import React from "react";
const TouristInfoCards = () => {
        return <div className="flex-container">
            
            <div className="infocard-container">
                   <div className="card">
                     
                        <img src = 'glasgow.jpg'
                             alt = "People make Glasgow, Building, Scotland. People Make Glasgow is the slogan of the city."
                             className="card-img-top" />
                        <div className="card-body">
		                        <a href="https://peoplemakeglasgow.com/" target="_blank" className="btn btn-primary">GLASGOW</a>
	                    </div>

                        <p>Glasgow is a port city on the River Clyde in Scotland's western Lowlands.
                           It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity
                           due to trade and shipbuilding. Today it's a national cultural hub, home to institutions
                           including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums
                           and a thriving music scene.<br></br><br></br><br></br></p>
                   </div>  
            </div>

            
            <div className="infocard-container">
                   <div className="card">
                     
                        <img src = 'manchester.jpeg'
                             alt = "photograph of brown concrete building with the slogan 'WE LOVE YOU MANCHESTER'"
                             className="card-img-top" />
                        <div className="card-body">
		                        <a href="https://www.visitmanchester.com/" target="_blank" className="btn btn-primary">MANCHESTER</a>
	                    </div>

                        <p>Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK 
                           right now where everybody and anybody is very warmly welcomed.
                           <br></br>
                           Known throughout the world as the birthplace of the industrial revolution, Manchester has a proud history
                           in science, politics, music, arts and sport. And today the city combines this heritage with a progressive vision 
                           to be a city that delivers surprise and delight in equal measures.</p>
                   </div>  
            </div>
            
            <div className="infocard-container">
                   <div className="card">
                     
                        <img src = 'london.jpg'
                             alt="Houses of Parliament and red double-decker bus"
                             className="card-img-top" />
                        <div className="card-body">
		                        <a href="https://www.visitlondon.com/" target="_blank" className="btn btn-primary">LONDON</a>
	                    </div>

                        <p>London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.
                            At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey,
                            site of British monarch coronations.
                            Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, 
                            and the entire city.<br></br><br></br></p>
                   </div>  
            </div>
</div>
};

export default TouristInfoCards;