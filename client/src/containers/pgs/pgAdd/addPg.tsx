
import * as React from "react";

// import components
import { Button, Container, Input, } from "../../../components";

// import containers
import { Layout } from "../../../containers";

// // import utils
// import {
//   API,
// } from "../../../utils";

import './style.css';


interface IState {
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
  this.stringChangeHandler = this.stringChangeHandler.bind(this)
    this.state = {

  balance: 0,
  initialDeposit: 0,
  name: {
    first: 'NA',
    last: 'NA'
  },
}
  }

  public stringChangeHandler = (e: any) => {
      console.log('this e', [e.target.name],  e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
      balance: this.state.initialDeposit
    })
    console.log('this state', this.state)
  }


  public render() {
  return (
    <Layout>
      <Container>
      <div className='Add'>

        <div className="Add_Input-Element">
        <Input
          type='text'        
          onChange={this.stringChangeHandler}
          itype='input'
          label='First Name'
          labelfor='firstName'
          />
        </div>

        <div className="Add_Input-Element">
        <Input
          type='text'        
          onChange={this.stringChangeHandler}
          itype='input'
          label='Last Name'
          labelfor='lastName'
          />
        </div>

        <div className="Add_Input-Element">
        <Input
          type='number'        
          onChange={this.stringChangeHandler}
          itype='input'
          label='Initial Deposit'
          labelfor='initialDeposit'
          />
        </div>
        <div className="Add_Submit-Button">
          <Button>SUBMIT</Button>
        </div>
        
                
       
        </div>
        </Container>
    </Layout>

  );
}
}
export default Add;

