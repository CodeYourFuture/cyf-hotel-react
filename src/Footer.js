import React from "react";
const Footer = props => {
  return (
    //create a bootstrap footer
    // <footer className="footer">
    //     <div className="container">
    //         {/* <span className="text-muted">Place sticky footer content here.</span> */}
    //         <div class="footer-cta pt-5 pb-5">
    //         <div class="row">
    //             <div class="col-xl-4 col-md-4 mb-30">
    //                 <div class="single-cta">
    //                     <i class="fas fa-map-marker-alt"></i>
    //                     <div class="cta-text">
    //                         <h3>Find us</h3>
    //                         <span>123 Fake Street, London, E1 4UD</span>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="col-xl-4 col-md-4 mb-30">
    //                 <div class="single-cta">
    //                     <i class="fas fa-phone"></i>
    //                     <div class="cta-text">
    //                         <h3>Call us</h3>
    //                         <span>0123 456789</span>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="col-xl-4 col-md-4 mb-30">
    //                 <div class="single-cta">
    //                     <i class="far fa-envelope-open"></i>
    //                     <div class="cta-text">
    //                         <h3>Mail us</h3>
    //                         <span>hello@fakehotel.com</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    // </footer>

    <footer>
      <ul>
        {props.footerDetails.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
