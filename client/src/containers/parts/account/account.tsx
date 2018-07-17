
import * as React from "react";

// // import components
import {
  Col, Input, Row,
} from "../../../components";


// import {
//   API, IVAL
// } from "../../../utils";


// interface IState {
//   creditsDebits: object,
//   _id: any,
//   addInput: number | void;  
//   payToInput: string;
//   subtractInput: number | void;
// }

import './style.css';


class Account extends React.Component<{
  _id: any;
  acctNum: number;
  click?: any;
  balance: number;
  nameFirst: string;
  nameLast: string;
}> {
  // public state: IState = {
  //   _id: this.props._id,
  //   creditsDebits: {},    
  // }

  constructor(props: any) {
    super(props);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.state = {
      _id: this.props._id,
      addInput: 4,
      creditsDebits: {},       
      payToInput: '', 
      subtractInput: 5,  
    }
  }

public inputChangeHandler = (e: any) => {
  this.setState({
    [e.target.name]: e.target.value
  })
  console.log(this.state);  
}

public addHandler = () => {
  console.log('add')
}

public subtractHandler = () => {
  console.log('subtract')
}

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
                Balance: <span id='Balance'>${this.props.balance}</span>
              </div>
            </Row>

          {/* Payed to/from begins here */}
            <Row>
              <div className="Account_Payed-To">
                <Input
                  id={this.props._id}                  
                  onChange={this.inputChangeHandler}                  
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
                  id={this.props._id}
                  onChange={this.inputChangeHandler}                  
                  itype='input'
                  label='Add Funds'
                  labelfor='addInput'
                />
              </Col>
              <Col size='md-1' />
              <Col size='md-3'>
                <div className="padd-down">
                  <button id={this.props._id}
                  onClick={this.addHandler}
                  className="Account_Add-Funds btn">+</button>
                </div>
              </Col>
            </Row>

          {/* Subtract funds begins here */}
            <Row>
              <Col size='md-8'>
                <Input
                  id={this.props._id}
                  onChange={this.inputChangeHandler}
                  itype='input'
                  label='Subtract Funds'
                  labelfor='subtractInput'
                />
              </Col>
              <Col size='md-1' />
              <Col size='md-3'>
                <div className="padd-down">
                  <button 
                  id={this.props._id}
                  onClick={this.subtractHandler}
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