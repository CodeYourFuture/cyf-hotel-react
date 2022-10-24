import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card-image">
        {/* CARD 1 */}
        <div className="card">
          <a href="https://peoplemakeglasgow.com/" target="_blank">
            <img
              className="image1"
              src="https://images.unsplash.com/photo-1579117268189-86a2276e5af4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdsYXNnb3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </a>
          <div class="container">
            <a
              class="btn"
              href="https://peoplemakeglasgow.com/"
              target="_blank"
            >
              Visit Glasgow Today!
            </a>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <a href="https://www.visitmanchester.com/" target="_blank">
            <img
              className="image1"
              src="https://images.unsplash.com/photo-1627226890711-fd1fdc35d77e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbmNoZXN0ZXIlMjB1a3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=600"
              alt=""
            />
          </a>
          <div class="container" />
          <a
            class="btn"
            href="https://www.visitmanchester.com/"
            target="_blank"
          >
            Visit Manchester Today!
          </a>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <a href="https://visitlondon.com/" target="_blank">
            <img
              className="image1"
              src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </a>
          <div class="container">
            <a class="btn" href="https://visitlondon.com/" target="_blank">
              Visit London Today!
            </a>
          </div>
        </div>
      </div>

      <h4>How to use CardComponent in ReactJS?</h4>
    </div>
  );
};

export default TouristInfoCards;
