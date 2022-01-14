import React, { Component } from 'react'
// import images from "../images/logo/promo_logo_watch_series_6_lte__el1kwqt2v52e_small_2x.png"
import images from "../images/logo/promo_logo_watch_series_6_lte__el1kwqt2v52e_small_2x.png"
 class Section4 extends Component {
   render(){ 
    return (
        <div>
             <section className="fourth-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="left-side-wrapper col-sm-12 col-md-6 col-lg-6">
          <div className="left-side-container">
            <div className="product-title">imac</div>
            <div className="hello">say hello.</div>
            <div className="links-wrapper">
              <ul>
                <li><a href="#">Learn more</a></li>
                <li><a href="#"> Buy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-side-wrapper col-sm-12 col-md-6 col-lg-6">
          <div className="right-side-container">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={images} alt="" />
              </div>
            </div>
            <div className="watch">
              The future of your health is on your wirth
            </div>
            <div className="links-wrapper">
              <ul>
                <li><a href="#">Learn more</a></li>
                <li><a href="#">BUY</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>         
        </div>
    );
}
}
export default  Section4
