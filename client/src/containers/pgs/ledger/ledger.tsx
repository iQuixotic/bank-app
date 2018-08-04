
import * as React from "react";

// import components
import { Container, LedgerTop, Line } from "../../../components";

// import containers
import { Layout } from "../../../containers";

import { API } from "../../../utils";

import './style.css';


interface IState {
  _id: string,
  acct: number,
  balance: number,
  loading: boolean,
  name: {
    first: string,
    last: string
  },
  transactions: [{
      ammount: number,
      party: string, 
      transaction_id: string,
      type: string
  }],
}

class Ledger extends React.Component {
  public state: IState;
  public constructor(props: any) {
  super(props);
    this.state = {
  _id: 'NA',
  acct: 0,
  balance: 0,
  loading: false,
  name: {
    first: 'NA',
    last: 'NA'
  },
  transactions: [{
      ammount: 0,
      party: '',
      transaction_id: '0',
      type: '',
  }],
}

this.delLineHandler = this.delLineHandler.bind(this)
  }

  public componentWillMount() {
      this.setState({ loading: true })
      const myProps: any = this.props
      API.grabOneAccount(myProps.match.params.id)
        .then((res) => this.getInitialState(res.data))
        .then(() => this.setState({ loading: false }))
        .catch(err => console.log(err));
  }

  public getInitialState = (arg: any) => {
    this.setState({
        _id: arg._id,
        acct: arg.acct,
        balance: (arg.balance).toFixed(2),
        loading: false,
        name: {
            first: arg.name.first,
            last: arg.name.last,
        },
        transactions: arg.transactions
    })
  }

  public delLineHandler = (e: any) => {    
      const data: any =  {
        _id: this.state._id,
        balance: this.state.balance, 
        trans_id: e.target.id,
        type: e.target.className 
      }
      console.log(data)
      API.removeOneEntry(data, data._id)
    // API.updateBalance(data, data._id)
    //   .then(() => this.setState({
    //     balance: this.state.balance
    //   }))
    // console.log(data)
    // console.log('this.delLineHandler', e.target.id)
  }

  public debitRemover = (arg: object, id: string) => {
    console.log('debitRover', arg, id)
    // API.removeOneEntry(arg, data._id)

  }

  public creditRemover = (arg: object, id: string) => {
    console.log('CREDITRover', arg, id)
    // API.removeOneEntry(arg, data._id)
  }

  public render() {
  return (
    <Layout {...this.state}>
        <Container>
            <div className="Ledger">            
              <LedgerTop 
                firstName={this.state.name.first}
                lastName={this.state.name.last}
                balance={this.state.balance}
                acctNum={this.state.acct}
                />
               
                    <Container>
                        <div className='Ledger-CDs'>
                        {this.state.transactions.map(each => (
                            <Line 
                                key={each.transaction_id}
                                _id={each.transaction_id}
                                cd={each.type === 'credit'}
                                trans={each.type}
                                ammount={each.ammount}
                                party={each.party} 
                                del={this.delLineHandler}
                                />
                              ) ) }
                        </div>
                    </Container>                
            </div>
        </Container>
    </Layout>

  );
}
}
export default Ledger;

