
import * as React from "react";

// import components
import {
  Col, Input, Row,
} from "../../../components";

import {
  API,
   IVAL,
    // MONEY
} from "../../../utils";


import './style.css';

interface IState {
  _id: any,
  addInput: number,
  balance: number,
  dataCD: object,
  payToInput: string,
  subtractInput: number
}

class Account extends React.Component<{
  _id: any;
  acctNum: number;
  balChange?:any;
  click?: any;
  balance: number;
  nameFirst: string;
  nameLast: string;
}> {
  public state: IState;  
  public constructor(props: any) {
    super(props);
    this.numInputHandler = this.numInputHandler.bind(this);
    this.isNumber = this.isNumber.bind(this)
    this.state = {
      _id: this.props._id,
      addInput: 4,
      balance: this.props.balance,
      dataCD: {
        credit: 0,
        debit: 0
      },       
      payToInput: '', 
      subtractInput: 5,  
    }
  }

// -----------------------------------
// only allow numbers and .'s in number input field
public isNumber = (e:any) => {
  const char = (e.which)
  char < 48 && char !== 46 || char > 58 && char !== 46 ? 
  e.preventDefault() :
  console.log('')
}

public numFormatHandler = (e: any) => {
  console.log('d')
}

// -----------------------------------
public numInputHandler = (e: any) => {  
  const myFixed = parseFloat(e.target.value).toFixed(2)
  this.setState({
    [e.target.name]: parseFloat(myFixed)
  })
}
  
// -----------------------------------
// if payToInput box
public stringInputHandler = (name: any, val: any) => {
  IVAL.isAString(val) ?
  console.log('id say its a string') :
  console.log('id say its not')
  IVAL.lengthCheck(val)
  IVAL.uppercaseEditor(val)
}

// ----------------------------------- 
// button click handlers
public addClickHandler = async () => {
  const data: any =  {
    _id: this.state._id,
    balance: this.state.balance + this.state.addInput
  }
  API.updateBalance(data, data._id)
  await this.setState({
  balance: data.balance
  })
}

public subtractClickHandler = async () => {
  const data: any =  {
    _id: this.state._id,
    balance: this.state.balance - this.state.subtractInput
  }
  API.updateBalance(data, data._id)
  await this.setState({
  balance: data.balance
  })
}
// -----------------------------------

  public render() {

    return (
      // Account component is each box meant 
      // to hold its own state on the main page
      <div className='card Account'>
        <Row>
          <span className='Account_Name'>{this.props.nameLast}, {this.props.nameFirst}</span>
          <span className='Account_Number'>{this.props.acctNum}</span>
          <span id={this.props._id}
            onClick={this.props.click}
            className="Account_Delete">X</span>
        </Row>

      {/* Account Balance */}
        <Row>
          <Col size="md-5">
            <Row>
              <div className='Account_Balance'>
                Balance: <span id='Balance'>
                ${(this.state.balance).toFixed(2)}</span>
              </div>
            </Row>

          {/* Payed to/from begins here */}
            <Row>
              <div className="Account_Payed-To">
                <Input
                  type='text'
                  id={this.props._id}                  
                  // onChange={this.originDecider}                  
                  itype='input'
                  label='Payed To/From'
                  labelfor='payToInput'
                />
              </div>

            </Row>
          </Col>
          <Col size='md-1' />
          <Col size="md-6">

          {/* Add funds begins here */}
            <Row>
              <Col size='md-8'>
                <Input
                  type='number'
                  id={this.props._id}
                  onChange={this.numInputHandler}                  
                  itype='input'
                  label='Add Funds'
                  labelfor='addInput'
                  keyPress={this.isNumber}
                />
              </Col>
              <Col size='md-1' />
              <Col size='md-3'>
                <div className="padd-down">
                  <button id={this.props._id}
                  onClick={this.addClickHandler}
                  className="Account_Add-Funds btn">+</button>
                </div>
              </Col>
            </Row>

          {/* Subtract funds begins here */}
            <Row>
              <Col size='md-8'>
                <Input
                  type="number"
                  id={this.props._id}
                  onChange={this.numInputHandler}
                  itype='input'
                  label='Subtract Funds'
                  labelfor='subtractInput'
                  keyPress={this.isNumber}
                />
              </Col>
              <Col size='md-1' />
              <Col size='md-3'>
                <div className="padd-down">
                  <button 
                  id={this.props._id}
                  onClick={this.subtractClickHandler}
                  className="Account_Subtract-Funds btn">-</button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Account;