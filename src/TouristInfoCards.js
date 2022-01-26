import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="card-group">
      <div className="card">
        <img
          height="500px"
          src="https://media.istockphoto.com/photos/dear-green-place-glasgow-from-the-air-picture-id1291440406?b=1&k=20&m=1291440406&s=170667a&w=0&h=U-QpTzeI3nFtY3ARA_4itcR1ad9lbavBP_SAJYHn20o="
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p>
            Welcome to the city! Discover the best of the city with Visit Our
            City, the official guide to England’s exciting city. Find things to
            do in the city, from iconic sightseeing spots and fun-filled days
            out to top restaurants, theatre and unmissable events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a
            href="http://peoplemakeglasgow.com"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          height="500px"
          src="https://media.istockphoto.com/photos/manchester-new-hampshire-usa-skyline-on-the-merrimack-river-picture-id1141676822?b=1&k=20&m=1141676822&s=170667a&w=0&h=1OKDDHvNajn0wnv4_DfONccwp-MOg7rbBwmMM3rDHOM="
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p>
            {" "}
            Whether you’re seeking culture, nightlife, history, or just good
            fun, there are plenty of things to do in Manchester. Be absorbed by
            the beautiful attractions such as the gothic architecture at John
            Rylands Library and Manchester Cathedral; take in fine art at
            Manchester Art Gallery and the Whitworth; discover history!{" "}
          </p>
          <a
            href="http://visitmanchester.com"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          height="500px"
          src="https://cdn.londonandpartners.com/visit/whats-on/special-events/new-years-eve-fireworks/96604-640x360-nye-fireworks16-closeup-640.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a
            href="http://visitlondon.com"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
//       <div className=“card”>
//         <img src=“/manchester.jpg” className=“card-img-top” />
//         <div className=“card-body”>
//           <h4>Manchester</h4>
//           <p>
//             Whether you’re seeking culture, nightlife, history, or just good
//             fun, there are plenty of things to do in Manchester. Be absorbed by
//             the beautiful attractions such as the gothic architecture at John
//             Rylands Library and Manchester Cathedral; take in fine art at
//             Manchester Art Gallery and the Whitworth; discover history! old and
//             new, at Manchester Museum and the Imperial War Museum North; see
//             contemporary arts redefined at HOME; or even learn to ski at Chill
//             Factore.
//           </p>
//           <a
//             href=“https://www.visitmanchester.com/”
//             target=“_blank”
//             className=“btn btn-primary”
//           >
//             More Information
//           </a>
//         </div>
//       </div>
//       <div className=“card”>
//         <img src=“/manchester.jpg” className=“card-img-top” />
//         <div className=“card-body”>
//           <h4>london</h4>
//           <p>
//             Welcome to London! Discover the best of London with Visit London,
//             the official guide to England’s exciting capital. Find things to do
//             in London, from iconic sightseeing spots and fun-filled days out to
//             top restaurants, theatre and unmissable London events. If you’re not
//             able to visit just yet, plan ahead to make the most of your next
//             visit.
//           </p>
//           <a
//             href=“https://visitlondon.com/”
//             target=“_blank”
//             className=“btn btn-primary”
//           >
//             More Information
//           </a>
//       </div>
//     </div>
//   );
// };
// export default TouristInfoCards;
