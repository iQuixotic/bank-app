
import * as React from "react";

// // import components
import {
  Container,
  Toolbar,
} from "../../components";

// import containers
import {
  Account,
} from "../../containers";

import {
  API,
} from "../../utils";

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
    }
    this.componentWillMount = () => {
      this.getAllAccts();
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
      <div className='Main'>
        <Toolbar />
        <Container>
          {this.state.allAccts.map(each => (
              <Account
                nameFirst={each.name.first}
                nameLast={each.name.last}
                acctNum={each.acct}
                balance={each.balance}
                _id={each._id}
                click={this.deleteAcctHandler}
              />
              )
            )
          }
        </Container>
      </div>
    );
  }
}


export default Main;
    
