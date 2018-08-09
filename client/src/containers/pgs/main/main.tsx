import * as React from "react";
import { Acct, AcctMobile, Container, Div } from "../../../components";
import { Account, Layout, MQ } from "../../../containers";
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
  loading: boolean,
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
      loading: false,
    }
    this.componentWillMount = () => {
      this.setState({ loading: true })
      this.getAllAccts()
    }
  }

  // for getting all accounts from db
  public getAllAccts = () => {
    API.grabAccounts()
      .then(res => this.setState({ allAccts: res.data }))
      .then(() => this.setState({ loading: false }))
      .catch(err => { throw err });
  }

  // delete an account by id when X is clicked
  public deleteAcctHandler = (e: any) => {
    const delID = e.target.id
    this.delAcct(delID)
    this.setState({ loading: true })
  }

  public delAcct = (id: any) => {
    API.removeAccount(id)
      .then(() => this.getAllAccts())
      .catch(err => { throw err });
  }

  public render() {
    return (
      <Layout {...this.state}>
        <div className='Main'>
          <MQ lowerLimit={751}>
            {this.state.allAccts.map(each => (
              < Account key={each._id}
                wrapper={Container}
                rend={Acct}
                nameFirst={each.name.first}
                nameLast={each.name.last}
                acctNum={each.acct}
                balance={each.balance}
                _id={each._id}
                delClick={this.deleteAcctHandler}
              />
            )
            )
            }
          </MQ>
          <MQ upperLimit={750}>
            {this.state.allAccts.map(each => (
              < Account key={each._id}
                wrapper={Div}
                rend={AcctMobile}
                nameFirst={each.name.first}
                nameLast={each.name.last}
                acctNum={each.acct}
                balance={each.balance}
                _id={each._id}
                delClick={this.deleteAcctHandler}
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

