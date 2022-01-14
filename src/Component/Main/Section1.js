import React, { Component } from 'react'
 class Section1 extends Component {
   render (){ 
    return (
        <div>
             <section className="first-wrapper top-50">
    <div className="container">
    <div className="shop-online">
      <p>
        <a href="#">Shop online</a> and get Specialist help, free no-contact
        delivery, and more.
      </p>
    </div>
  </div>
    <div className="first-wrapper">
      <div className="product-title">iphone 12</div>
      <div className="past">Blast past fast</div>
      <div className="price-wrapper">
        From $29.12/mo.for 24 mo. <br/>
        or $699 before trade-in<sup>1</sup>
      </div>
      <div className="direct-wrapper">
        buy directly from apple <br/>
        with Special carrier Offers
      </div>
      <div className="links-wrapper">
        <ul>
          <li><a href="#">Learn more</a></li>
          <li><a href="#"> Buy</a></li>
        </ul>
      </div>
    </div>
  </section>           
        </div>
    );
}
}
export default  Section1;
