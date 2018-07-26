
import * as React from "react";

// // // import components
// import {
//   Container,
//   Toolbar,
// } from "../../../components";

// import containers
import { Layout, MQ } from "../../../containers";

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
        <MQ lowerLimit={600}>
            <Layout>
              <div>more layouts</div>
              <div>more shit here</div>
              <div>more shit here</div>

            </Layout>
            <Toolbar />
            <div>HisChildrren</div>
        </MQ>
      
    );
  }
}


export default Add;
    
