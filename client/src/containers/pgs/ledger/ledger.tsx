
import * as React from "react";

// import components
import { Container, Line } from "../../../components";

// import containers
import { Layout } from "../../../containers";

import { API } from "../../../utils";

import './style.css';


interface IState {
  _id: string,
  acctNum: number,
  balance: number,
//   initialDeposit: number;
  name: {
    first: string,
    last: string
  },
  transactions: [{
      ammount: number,
      party: string, 
      type: string
  }],
}

class Ledger extends React.Component {
  public state: IState;
  public constructor(props: any) {
  super(props);
    this.state = {

  _id: 'NA',
  acctNum: 0,
  balance: 0,
//   initialDeposit: 0,
  name: {
    first: 'NA',
    last: 'NA'
  },
  transactions: [{
      ammount: 0,
      party: '',
      type: '',
  }],
}
  }

  public componentWillMount() {
      const myProps: any = this.props
      API.grabOneAccount(myProps.match.params.id)
        .then((res) => this.getInitialState(res.data))
        .catch(err => console.log(err));

  }
  public getInitialState = (arg: any) => {
    this.setState({
        _id: arg._id,
        acctNum: arg.acct,
        balance: arg.balance,
        name: {
            first: arg.name.first,
            last: arg.name.last,
        },
        transactions: arg.transactions

    })
    console.log(this.state)
  }

  public render() {
  return (
    <Layout>
        <Container>
            <div className="Ledger">            
                {this.state._id}
                <hr/>
                {this.state.acctNum}
                <hr/>
                {this.state.balance}
                <hr/>
                {this.state.name.first}
                <hr/>
                {this.state.name.last}
                <hr/>
                {this.state.transactions.map(each => (
                    <Container>
                        <div className='Ledger-CDs'>
                            <Line 
                                cd={each.type === 'credit'}
                                trans={each.type}
                                ammount={each.ammount}
                                party={each.party} />
                        </div>
                    </Container>
                ) ) }
            </div>
        </Container>
    </Layout>

  );
}
}
export default Ledger;

