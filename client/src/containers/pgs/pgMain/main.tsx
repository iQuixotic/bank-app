import * as React from "react";

// import containers
import { Account, Layout, MQ } from "../../../containers";

import { Acct, AcctMobile, Container, Div } from "../../../components";

// import utils
import { API } from "../../../utils";

import './style.css';

interface IState {
  allAccts: [{
    _id: string,
    acct: number,
    balance: number,
    name: {
      first: string,
      last: string
    },
  }],
  deleteID: string,
  full: boolean,
  thisBal: number
}


class Main extends React.Component {
  public state: IState;
  public constructor(props: any) {
    super(props);
    this.state = {
      allAccts: [{
        _id: 'NA',
        acct: 0,
        balance: 0,
        name: {
          first: 'NA',
          last: 'NA'
        },
      }],
      deleteID: 'none yet supplied',
      full: true,
      thisBal: 0,
    }
    this.componentWillMount = () => {
      this.getAllAccts();
    }

    this.componentWillUpdate = () => {
      console.log((<MQ upperLimit={1000}>{true}</MQ>).props.children)
    }
  }

  public getAllAccts = () => {
    API.grabAccounts()
      .then(res => this.setState({ allAccts: res.data }))
      .then(() => console.log(this.state.allAccts))
      .catch(err => console.log(err))
  }

  public deleteAcctHandler = (e: any) => {
    console.log(this.state.deleteID);
    this.setState({
      deleteID: e.target.id
    });
  }

  public render() {
    return (
      <Layout>
      <div className='Main'>
      <MQ lowerLimit={1001}>
          {this.state.allAccts.map(each => (
            < Account key = { each._id }
                wrapper={Container}
                rend={Acct}
                nameFirst = { each.name.first }
                nameLast = { each.name.last }
                acctNum = { each.acct }
                balance = { each.balance }
                _id = { each._id }
                delClick = { this.deleteAcctHandler }
                allAcctsLength={this.state.allAccts.length}
            />
              )
            )
          }
      </MQ>
      <MQ upperLimit={1000}>
          {this.state.allAccts.map(each => (
            < Account key = { each._id }
                wrapper={Div}
                rend={AcctMobile}
                nameFirst = { each.name.first }
                nameLast = { each.name.last }
                acctNum = { each.acct }
                balance = { each.balance }
                _id = { each._id }
                delClick = { this.deleteAcctHandler }
                allAcctsLength={this.state.allAccts.length}
            />
              )
            )
          }
      </MQ>

      </div>
      </Layout>
    );
  }
}

export default Main;
    
