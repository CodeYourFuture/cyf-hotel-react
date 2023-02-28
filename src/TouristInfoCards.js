const TouristInfoCards = () => {
    return (
      <div className="cards ">
        <div className="card ">
          <img src="https://www.visitscotland.com/blog/wp-content/uploads/2021/10/Park_Circus_and_Kelvingrove_Park.jpg.jpg" className="card-img-top" />
          <div className="card-body">
          <h2>Glasgow</h2>
            <p>
            loren
            </p>
            <a href="https://peoplemakeglasgow.com/" className="btn btn-dark">
              More information
            </a>
            

          </div>
        </div>
  
        <div className="card ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVi5kIsFSbmxAd18dRrqTOKzR5bMSftf8Cg&usqp=CAU" className="card-img-top" />
          <div className="card-body">
            <h2>Manchester</h2>
            <p>
            loren
            </p>
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-dark"
            >
              More information
            </a>
          </div>
        </div>
  
        <div className="card">
          <img src="https://img.etimg.com/thumb/msid-65081396,width-650,height-488,imgsize-361893,,resizemode-75/london-travel-thinkstock.jpg" className="card-img-top" />
          <div className="card-body">
          <h2>London</h2>
            <p>
            loren
            </p>
            <a href="https://www.visitlondon.com/" className="btn btn-dark">
            More information
            </a>
          </div>
        </div>
      </div>
    );
  };
  export default TouristInfoCards