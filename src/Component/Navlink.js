import React, { Component } from "react";

class Navlink extends Component {
  render() {
    return (
      
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href={this.props.linkurl}>
            {this.props.linkName}{this.props.images}
          </a>
        </li>

    
    );
  }
}

export default Navlink;

//it mean linkName the name of example below 'iphone'like text
//and linkurl  '/iphone' is link
//how to we  use in our case
// <examplelink linkName='iphone' linkurl='/iphone'

// function ena (x,y){
// return (x+y);
// }
// ena ( 4,5);
// ena (45,23);

// function ena (x,y){
//     return(
//         <li className="nav-item"><a className="nav-link js-scroll-trigger" href={x}>{y}</a></li>)
//     }
//     ena('/iphone','iphone');
//     ena('/music','music');

// // we can write multiple file with in one function, it is
// // props
