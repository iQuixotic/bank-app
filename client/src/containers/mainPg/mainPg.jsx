
import React, { Component } from "react";

// // import components
import { 
    NavItems
 } from "../../components";

// // import containers
// import {

// } from "../../containers";

import '../../master/main.css';
import './style.css';


class Main extends Component {
  state = {
  }


// selectFieldHandler = () => {
//   console.log('hellow')
// }

// inputChangeHandler = event => {
//   console.log('hello')
// }

// formSubmitHandler = () => {
// }
 
  render() {
    return (
      <div className='Main'>
        <NavItems />
        Hellos from the main page !!
      </div>
    );
  }
}

export default Main;

