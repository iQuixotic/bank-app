
import * as React from "react";

// import components
// import {
//   Acct
// } from "../../../components";

// import containers
import { Layout } from "../../../containers";

// // import utils
// import {
//   API,
// } from "../../../utils";

import './style.css';


interface IState {
  _id: string,
  acct: number,
  balance: number,
  initialDeposit: number;
  name: {
    first: string,
    last: string
  },
}

class Add extends React.Component {
  public state: IState;
  public constructor(props: any) {
  super(props);
    this.state = {

  _id: 'NA',
  acct: 0,
  balance: 0,
  initialDeposit: 0,
  name: {
    first: 'NA',
    last: 'NA'
  },
}
  }


  public render() {
  return (
    <Layout>childeren
               {/* < Account key = { each._id }
                wrapper={Container}
                rend={Acct}
                nameFirst = { each.name.first }
                nameLast = { each.name.last }
                acctNum = { each.acct }
                balance = { each.balance }
                _id = { ._id }
                delClick = { this.deleteAcctHandler }
                allAcctsLength={this.state.allAccts.length}
            /> */}
    </Layout>

  );
}
}
export default Add;

