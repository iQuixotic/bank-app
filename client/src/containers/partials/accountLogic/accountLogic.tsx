import * as React from "react";
import MediaQuery from 'react-responsive';

import { API, } from "../../../utils";

import { Acct,  AcctMobile } from '../../../components';

import { Loader } from '../../../containers';

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
  allAccts: any;
  delClick?: any;
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
      addInput: 0,
      balance: this.props.balance,
      dataCD: {
        credit: 0,
        debit: 0
      },       
      payToInput: '', 
      subtractInput: 0,  
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
public stringInputHandler = () => {
  if(this.state.payToInput !== "") {
    return true
  }
  return false;
}

public stringChangeHandler = (e: any) => {
  this.setState({
    payToInput: e.target.value
  })
}

// ----------------------------------- 
// button click handlers
public addClickHandler = async () => {
  this.stringInputHandler() && !isNaN(this.state.addInput) && this.state.addInput > 0 ?
  this.submitHandler('credit', this.state.addInput) :
  console.log(this.state.addInput);  
}

public subtractClickHandler = async () => {  
  this.stringInputHandler() && !isNaN(this.state.subtractInput) && this.state.subtractInput > 0 ?
  this.submitHandler('debit', -this.state.subtractInput) :
  console.log(-this.state.subtractInput);  
}

public submitHandler = async (cORd: string, arg: number) => {
  const data: any =  {
    _id: this.state._id,
    balance: this.state.balance + arg
  }
  const trans: any =  {
    ammount: arg,
    party: this.state.payToInput,
    type: cORd
  }
  API.updateBalance(data, data._id)
  console.log(trans)
  API.updateOneEntry(trans, data._id)
  await this.setState({
  balance: data.balance
  })
}

  // -----------------------------------
  public render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1000px)">
          <Acct
            nameFirst={this.props.nameFirst}
            nameLast={this.props.nameLast}
            acctNum={this.props.acctNum}
            balance={this.props.balance}
            _id={this.props._id}
            delClick={this.props.delClick}
            numChange={this.numInputHandler}
            subtractClick={this.subtractClickHandler}
            isNumber={this.isNumber}
            addClick={this.addClickHandler}
            stringChange={this.stringChangeHandler}
            {...this.state}
          />
        </MediaQuery>
        <div>
          <AcctMobile
            nameFirst={this.props.nameFirst}
            nameLast={this.props.nameLast}
            acctNum={this.props.acctNum}
            balance={this.props.balance}
            _id={this.props._id}
            delClick={this.props.delClick}
            numChange={this.numInputHandler}
            subtractClick={this.subtractClickHandler}
            isNumber={this.isNumber}
            addClick={this.addClickHandler}
            stringChange={this.stringChangeHandler}
            {...this.state}
          />
        </div>
      </div>
    )
  }
}
    
export default Loader(Account);