
import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
import Header from "./Component/Header/Header";
import Main from "./Component/Main/main";
import News from "./Component/Main/News";
import Footer from "./Component/Footer/Footer";




// // Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";

// import general css
import "./Component/Css/Style.css";
function App() {
  return (
//    <div>
//          <Header />
//          < Main/>
//        <News/>
//       <Footer /> 
//    </div>

    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          {/* <Route path="/" component={Four04} /> */}
        </Switch>
        <News/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

