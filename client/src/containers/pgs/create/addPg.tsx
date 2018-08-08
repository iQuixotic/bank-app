
import * as React from "react";

// import components
import { Button, Container, Input, } from "../../../components";

// import containers
import { Layout } from "../../../containers";

// import utils
import { API, IVAL, NUM } from '../../../utils';


import './style.css';


interface IState {
  firstName: '',
  initialDeposit: number,
  lastName: ''
}

class Add extends React.Component {
  public state: IState;
  public constructor(props: any) {
  super(props);
  this.changeHandler = this.changeHandler.bind(this)
    this.state = {
    firstName: '',
    initialDeposit: 0,
    lastName: ''
}
  }

  // edit state for input boxes, if number field, parse float
public changeHandler = (e: any) => {
  e.target.name === 'initialDeposit' ?
    this.setState({ [e.target.name]: parseFloat(e.target.value) }) :
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
}


public dataHandler = () => {  
  const x = this.state.initialDeposit
  const y = this.state.firstName
  const z = this.state.lastName
  const n = NUM.returnAcctNum()
  if(IVAL.stringInputHandler(y) && 
     IVAL.stringInputHandler(z)  && 
     !isNaN(x) && x > 0) {
    this.submitHandler(x, y, z, n)
  } 
  console.log(x, y, z, n)
}

// on submission
public submitHandler = (arg: number, arg2: string, arg3: string, n: number) => {
  const data: any =  {  
    acct: n,
    balance: arg,
    initialDeposit: arg,
    name: {
      first: arg2,
      last: arg3
    },
    transactions: []
  }
  console.log(data)
  API.createNewAccount(data)
  this.resetInputFields()
}

// to avoid submitting the same information twice
public resetInputFields = () => {
  const $input: any = document.getElementById('Add_input-initDepo');
  const lInput: any = document.getElementById('Add_input-lastName');
  const fInput: any = document.getElementById('Add_input-firstName');

  $input.value = ''
  lInput.value = ''
  fInput.value = ''
  this.resetSt()
}

  public resetSt = () => {
    this.setState({
      firstName: '',
      initialDeposit: 0,
      lastName: ''
    })
  }

  public render() {
  return (
    <Layout>
      <Container>
      <div className='Add'>

        <div className="Add_Input-Element">
        <Input
          id='Add_input-firstName'
          type='text'        
          change={this.changeHandler}
          itype='input'
          label='First Name'
          labelfor='firstName'
          />
        </div>

        <div className="Add_Input-Element">
        <Input
          id='Add_input-lastName'
          type='text'        
          change={this.changeHandler}
          itype='input'
          label='Last Name'
          labelfor='lastName'
          />
        </div>

        <div className="Add_Input-Element">
        <Input
          id='Add_input-initDepo'
          type='text'        
          change={this.changeHandler}
          itype='input'
          label='Initial Deposit'
          labelfor='initialDeposit'
          press={IVAL.isNumber}
          />
        </div>
        <div className="Add_Submit-Button">
          <Button click={this.dataHandler} >SUBMIT</Button>
        </div>               
       
        </div>
        </Container>
    </Layout>

  );
}
}
export default Add;

