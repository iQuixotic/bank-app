
import * as React from "react";

// // import components
import {
  Col, Input, Row,
} from "../../components";

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
    this.state = {
      _id: this.props._id,
      addInput: 4,
      creditsDebits: {},       
      payToInput: '', 
      subtractInput: 5,  
    }
  }

public inputChangeHandler = (e: any) => {
  console.log(e.target.value);
  this.setState({
    
  })
}

public addHandler = () => {
  console.log('add')
}

public subtractHandler = () => {
  console.log('subtract')
}

  public render() {
    return (
      <div className='card Account'>
        <Row>
          <span className='Account_Name'>{this.props.nameLast}, {this.props.nameFirst}</span>
          <span className='Account_Number'>{this.props.acctNum}</span>
          <span id={this.props._id}
            onClick={this.props.click}
            className="Account_Delete">X</span>
        </Row>

        <Row>
          <Col size="md-5">
            <Row>
              <div className='Account_Balance'>
                Balance: <span id='Balance'>${this.props.balance}</span>
              </div>
            </Row>
            <Row>
              <div className="Account_Payed-To">
                <Input
                  id={`payed-to${this.props._id}`}                  
                  onChange={this.inputChangeHandler}                  
                  itype='input'
                  label='Payed To/From'
                  labelfor='payedFrom'
                />
              </div>

            </Row>
          </Col>
          <Col size='md-1' />
          <Col size="md-6">
            <Row>
              <Col size='md-8'>
                <Input
                  id={`input-add${this.props._id}`}
                  onChange={this.inputChangeHandler}                  
                  itype='input'
                  label='Add Funds'
                  labelfor='add'
                />
              </Col>
              <Col size='md-1' />
              <Col size='md-3'>
                <div className="padd-down">
                  <button id={`button-add${this.props._id}`}
                  onClick={this.addHandler}
                  className="Account_Add-Funds btn">+</button>
                </div>
              </Col>
            </Row>

            <Row>
              <Col size='md-8'>
                <Input
                  id={`input-subtract${this.props._id}`}
                  onChange={this.inputChangeHandler}
                  itype='input'
                  label='Subtract Funds'
                  labelfor='subtract'
                />
              </Col>
              <Col size='md-1' />
              <Col size='md-3'>
                <div className="padd-down">
                  <button 
                  id={`button-subtract${this.props._id}`}
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