
import * as React from "react";

// import components
import { Container, LedgerTop, Line } from "../../../components";

// import containers
import { Layout, MQ } from "../../../containers";

import { API } from "../../../utils";

import './style.css';

interface IState {
  _id: string,
  acct: number,
  balance: number,
  initialDeposit: number,
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


let newData: any = 8;
class Ledger extends React.Component {
  public state: IState;
  public constructor(props: any) {
  super(props);
    this.state = {
  _id: 'NA',
  acct: 0,
  balance: 0,
  initialDeposit: 0,
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
        balance: parseFloat(arg.balance).toFixed(2),
        initialDeposit: parseFloat(arg.initialDeposit).toFixed(2),
        loading: false,
        name: {
            first: arg.name.first,
            last: arg.name.last,
        },
        transactions: arg.transactions
    })
  }

  public delLineHandler = (e: any) => {    
    const domEl: any = document.getElementById(`line ${e.target.id}`)
    const data: any =  {
      _id: this.state._id,        
      balance: this.state.balance, 
      trans_id: e.target.id,
      type: e.target.className 
    }      
    this.speedUpdater(data.trans_id)
    data.balance = parseFloat(data.balance)
    data.type === 'credit' ?
    this.creditRemover(data, data._id, domEl) :
    this.debitRemover(data, data._id, domEl)
  }

  public speedUpdater = (delID: string) => {
    const t: any = this.state.transactions
    for (let i = 0; i < t.length; i++) {
      const obj = t[i];
      if (delID.indexOf(obj.transaction_id) !== -1) {
        t.splice(i, 1)
        i--
      }
    }
    this.setState({ transactions: t })
  }

  public debitRemover = (arg: any, id: string, domEl: any) => {
    const bal: number = arg.balance + parseFloat(domEl.innerHTML)
    newData = {      
      balance: bal
    }
    this.setState({ balance: bal.toFixed(2) }) 
    this.ledgerUpdater(arg, id, newData)
  }

  public creditRemover = (arg: any, id: string, domEl: any) => {
    const bal: number = arg.balance - parseFloat(domEl.innerHTML)
    newData = {      
      balance: bal
    }
    this.setState({ balance: bal.toFixed(2) }) 
    this.ledgerUpdater(arg, id, newData)
  }

  public ledgerUpdater = (arg: any, id: any, bal: any) => {
    API.updateBalance(bal, id)
    API.removeOneEntry(arg, id)
  }

  public render() {
    const transactionsMapper: any = (
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
    )
  return (
    <Layout {...this.state}>
        <Container>
            <div className="Ledger">            
              <LedgerTop 
                firstName={this.state.name.first}
                lastName={this.state.name.last}
                balance={this.state.balance}
                acctNum={this.state.acct}
                initial={this.state.initialDeposit}
                />
                  <MQ lowerLimit={995}>
                    <Container>
                      <div className='Ledger_Credits_Debits'>
                        {transactionsMapper}
                      </div>
                    </Container>   
                  </MQ> 

                   <MQ upperLimit={994}>
                      <div className='Ledger_Credits_Debits'>
                        {transactionsMapper}
                      </div>
                  </MQ>                       
            </div>
        </Container>
    </Layout>

  );
}
}
export default Ledger;

