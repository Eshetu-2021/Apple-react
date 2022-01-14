import React, { Component } from "react";
import logo from "../images/logo/logo-sm.png";
import search from "../images/logo/search-icon-sm.png";
import cart from "../images/logo/cart-sm.png";
import Navlink from "../Navlink";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <a className="navbar-brand mx-auto" href="#">
                <img src={logo} />
              </a>

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                
                  <Navlink linkName="mac" linkurl="/mac" />
                  

                  <Navlink linkName="iphone" linkurl="/iphone" />

                  <Navlink linkName="ipad" linkurl="/ipad" />

                  <Navlink linkName="watch" linkurl="/watch" />

                  <Navlink linkName="tv" linkurl="/tv" />

                  <Navlink linkName="music" linkurl="/music" />

                  <Navlink linkName="Support" linkurl="/Support" />


                  <Navlink images={ <img src={search}/>}linkurl="/search/" />

                  <Navlink images={ <img src={cart}/>}linkurl="/cart/" />
                  
                  {/* <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/search/">
                      <img src={search} />
                    </a>
                  </li> */}

                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/cart/">
                      <img src={cart} />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
