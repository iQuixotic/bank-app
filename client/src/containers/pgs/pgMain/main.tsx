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
  full: boolean,
  loading: boolean,
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
      full: true,
      loading: false,
      thisBal: 0,
    }
    this.componentDidMount = () => {
      this.setState({ loading: true })
      this.getAllAccts()
    }    
  }

  public getAllAccts = () => {
    API.grabAccounts()
      .then(res => this.setState({ allAccts: res.data }))
      .then(() => this.setState({ loading: false }))
      .catch(err => console.log(err))
  }

  public deleteAcctHandler = (e: any) => {
    const delID = e.target.id
    this.delAcct(delID)
    this.setState({ loading: true })
  }

  public delAcct = (id: any) => {    
    API.removeAccount(id)  
      .then(() => this.getAllAccts())
      .catch(err => console.log(err))
  }

  public render() {
    return (
      <Layout>
      <div className='Main'>
      <MQ lowerLimit={751}>
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
                loading={this.state.loading}
                // {...this.state} 
            />
              )
            )
          }
      </MQ>
      <MQ upperLimit={750}>
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
                // loading={this.state.loading}
                {...this.state} 
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
    
