
import * as React from "react";

// // // import components
// import {
//   Container,
//   Toolbar,
// } from "../../../components";

// import containers
import { Layout, MediaQuery } from "../../../containers";

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
        <MediaQuery
          mobileSize={<div>Small B</div>}
          fullSize={<div>Full B</div>}
          div={Toolbar}>
            <Layout>
              <div>more layouts</div>
              <div>more shit here</div>
              <div>more shit here</div>

            </Layout>
            <Toolbar />
            <div>HisChildrren</div>
        </MediaQuery>
      
    );
  }
}


export default Add;
    
