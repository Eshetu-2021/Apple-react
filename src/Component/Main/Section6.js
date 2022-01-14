import React, { Component } from 'react'
import logo from "../images/logo/promo_logo_ted_lasso_s2__fe51b5rt5yuu_small_2x.png";
import light from "../images/logo/logo_light__cfvl40z2nzau_small_2x.png";
import logo2 from "../images/logo/logo__dcojfwkzna2q_large_2x.png";

 class Section6 extends Component {
   render(){ 
    return (
        <div>
            <section className="sixth-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="left-side-wrapper col-sm-12 col-md-6">
          <div className="left-side-container">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={logo2}/>
              </div>
            </div>
            <div className="description-wrapper">
              Introducing Spatial Audio <br/>
              with Dolby Atmos.
            </div>
            <div className="white">
              <a href="#"> Listen now <sup>4</sup></a>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="right-side-wrapper col-sm-12 col-md-6">
          <div className="right-side-container">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={light}/>
              </div>
            </div>
            <div className="bottom-logo-wrapper">
              <div className="logo-wrapper">
                <img src={logo }/>
              </div>
            </div>
            <div className="watch-more">
              <a href="#"> watch seasson 2 trailer</a>
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
export default Section6;
