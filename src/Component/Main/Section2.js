import React, { Component } from 'react'

 class Section2 extends Component {
   render(){ 
    return (
        <div>
            <section className="second-wrapper">
    <div className="container">
      <div className="product-title">iphone 12 pro</div>
      <div className="year">it's a leap year</div>
      <div className="price-wrapper grey">
        from $41.62/mo. for 24 mo.<br/>
        or $999 before trade-in <sup>2</sup><br/>
      </div>
      <div className="direct-wrapper grey">
        Buy directly from apple with<br/>
        with Special carrier Offers<br/>
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
export default Section2 
