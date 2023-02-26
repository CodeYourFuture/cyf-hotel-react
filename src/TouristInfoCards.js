const TouristInfoCards = () => {
    return (
      <div>
        <div className="card">
          <img src="https://www.visitscotland.com/blog/wp-content/uploads/2021/10/Park_Circus_and_Kelvingrove_Park.jpg.jpg" className="card-img-top" />
          <div className="card-body">
            <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
  
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVi5kIsFSbmxAd18dRrqTOKzR5bMSftf8Cg&usqp=CAU" className="card-img-top" />
          <div className="card-body">
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
  
        <div className="card">
          <img src="https://img.etimg.com/thumb/msid-65081396,width-650,height-488,imgsize-361893,,resizemode-75/london-travel-thinkstock.jpg" className="card-img-top" />
          <div className="card-body">
            <a href="https://www.visitlondon.com/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  };
  export default TouristInfoCards