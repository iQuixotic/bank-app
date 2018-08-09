import * as React from "react";
import { API, IVAL } from "./../../utils";

interface IState {
  _id: any,
  addInput: number,
  balance: number,
  dataCD: object,
  payToInput: string,
  subtractInput: number
}

// re-usable number variable
let x: number = 0;
class Account extends React.Component<{
  _id: string,
  acctNum: number,
  delClick?: any,
  balance: number,
  nameFirst: string,
  nameLast: string,
  rend: any,
  wrapper: any
}> {
  public state: IState;
  public constructor(props: any) {
    super(props);
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
    this.changeHandler = this.changeHandler.bind(this);
  }

  // edit state for input boxes, if number field, parse float
  public changeHandler = (e: any) => {
    const myUniq = e.target.id
    myUniq.includes('addInput') || myUniq.includes('subtInput') ?
      this.setState({ [e.target.name]: parseFloat(e.target.value) }) :
      this.setState({ [e.target.name]: e.target.value })
  }

  // ----------------------------------- 
  // button click handlers
  public addClickHandler = () => {
    x = this.state.addInput
    if (this.validInputAlerts(x, 'credit')) {
      this.submitHandler('credit', x)
    }
  }

  public subtractClickHandler = () => {
    x = this.state.subtractInput
    if (this.validInputAlerts(x, 'debit')) {
      this.submitHandler('debit', -x)
    }
  }

  // ----------------------------------- 
  // alerts for inpropper inputs
  public validInputAlerts = (t: any, arg: string) => {
    if (!IVAL.stringInputHandler(this.state.payToInput)) {
      window.alert('Please fill out the payed to/ payed from \ninput field to continue.')
      return false;
    } if (isNaN(t) || t === null || t === 0) {
      window.alert(`Please fill out the ${arg} input \nfield with a valid amount (numbers and decimals only).`)
      return false;
    } else {
      return true;
    }
  }

  // on submission
  public submitHandler = (creditOrDebit: string, arg: number) => {
    const data: any = {
      _id: this.state._id,
      balance: this.state.balance + arg
    }
    const trans: any = {
      ammount: Math.abs(arg),
      party: this.state.payToInput,
      transaction_id: Date.now().toString(),
      type: creditOrDebit
    }
    API.updateBalance(data, data._id)
    API.updateOneEntry(trans, data._id)
    this.updateBal(data)
  }

  public updateBal = (data: any) => {
    this.setState({ balance: data.balance })
    this.resetInputFields(this.props._id);
  }

  // to avoid submitting the same information twice
  public resetInputFields = (id: string) => {
    const addInput: any = document.getElementById(`addInput ${id}`);
    const subtInput: any = document.getElementById(`subtInput ${id}`);
    const paymentInput: any = document.getElementById(`paymentInput ${id}`);

    addInput.value = ''
    subtInput.value = ''
    paymentInput.value = ''
    this.resetSt('', NaN)
  }

  // reset state
  public resetSt = (arg: string, arg2: number) => {
    this.setState({
      addInput: arg2,
      payToInput: arg,
      subtractInput: arg2,
    })
  }

  // -----------------------------------
  public render() {
    return (
      <this.props.wrapper>
        {<this.props.rend
          nameFirst={this.props.nameFirst}
          nameLast={this.props.nameLast}
          acctNum={this.props.acctNum}
          balance={this.props.balance}
          _id={this.props._id}
          delClick={this.props.delClick}
          change={this.changeHandler}
          subtractClick={this.subtractClickHandler}
          press={IVAL.isNumber}
          addClick={this.addClickHandler}
          {...this.state}
        />}
      </this.props.wrapper>
    )
  }
}

export default Account;