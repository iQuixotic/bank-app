import * as React from "react";

import {
    Col, Header,
    Input, Row,     
} from '../../../components';


interface IProps {
  _id: any;
  acctNum: number;
  addClick: any;
  balance: number;
  balChange?:any;
  children?: any,
  delClick?: any;
  isNumber: any;
  nameFirst: string;
  nameLast: string;
  numChange: any;
  stringChange: any,
  subtractClick: any,
}

import './style.css';

const Account = (props: IProps) => {
    return (
      <div className='card Account'>
      <Row>
        <Header 
          _id={props._id}
          nameLast={props.nameLast}
          nameFirst={props.nameFirst}
          acctNum={props.acctNum}
          delClick={props.delClick}
          />
      </Row>

    {/* Account Balance */}
      <Row>
        <Col size="md-5">
          <Row>
            <div className='Account_Balance'>
              Balance: <span id='Balance'>
              {props.balance.toFixed(2)}</span>
            </div>
          </Row>

        {/* Payed to/from begins here */}
          <Row>
            <div className="Account_Payed-To">
              <Input
                type='text'
                id={props._id}                  
                onChange={props.stringChange}                  
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
                id={props._id}
                onChange={props.numChange}                  
                itype='input'
                label='Add Funds'
                labelfor='addInput'
                keyPress={props.isNumber}
              />
            </Col>
            <Col size='md-1' />
            <Col size='md-3'>
              <div className="padd-down">
                <button id={props._id}
                onClick={props.addClick}
                className="Account_Add-Funds btn">+</button>
              </div>
            </Col>
          </Row>

        {/* Subtract funds begins here */}
          <Row>
            <Col size='md-8'>
              <Input
                type="number"
                id={props._id}
                onChange={props.numChange}
                itype='input'
                label='Subtract Funds'
                labelfor='subtractInput'
                keyPress={props.isNumber}
              />
            </Col>
            <Col size='md-1' />
            <Col size='md-3'>
              <div className="padd-down">
                <button 
                id={props._id}
                onClick={props.subtractClick}
                className="Account_Subtract-Funds btn">-</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Account;