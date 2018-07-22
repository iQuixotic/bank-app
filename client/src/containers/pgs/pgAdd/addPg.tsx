
import * as React from "react";

// // // import components
// import {
//   Container,
//   Toolbar,
// } from "../../../components";

// // import containers
// import {
//   Account,
// } from "../../../containers";

// // import utils
// import {
//   API,
// } from "../../../utils";

import './style.css';

import { 
  Toolbar,
} from "../../../components";

interface IState {     
    _id: string,
}

class Add extends React.Component <{
    _id: string,
}> {
  public state: IState;
  public constructor(props: any) {
    super(props);
    this.state = {    
        _id: 'NA',       
    }
  }

  public render() {
    return (
      <div className='Add'>
        <Toolbar />
      </div>
    );
  }
}


export default Add;
    
