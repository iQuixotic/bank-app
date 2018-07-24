import * as React from "react";

import {
    Col, Header,
    Input, Row,     
} from '../../../../components';


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

const AcctMobile = (props: IProps) => {
    return (
      <div className='Mobile_Acct'>
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
            <div className='Mobile_Balance'>
              Balance: <span id='Balance'>
              ${props.balance.toFixed(2)}</span>
            </div>
            </Row>
      


              {/* Payed to/from begins here */}
              <Row>
        <Col size='10'>
            <div className="Mobile_Payed-To">
              <Input
                type='text'
                id={props._id}                  
                onChange={props.stringChange}                  
                itype='input'
                label='Payed To/From'
                labelfor='payToInput'
              />
            </div>
            </Col>
        <Col size='2'/>
        </Row>





        {/* Add funds begins here */}
          <Row>
            <Col size='8'>
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
            <Col size='1' />
            <Col size='2'>
                <button id={props._id}
                onClick={props.addClick}
                className="Mobile_Add-Funds btn">+</button>
              </Col>
          </Row>

        {/* Subtract funds begins here */}
          <Row>
            <Col size='8'>
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
            <Col size='1' />
            <Col size='2'>
                <button 
                id={props._id}
                onClick={props.subtractClick}
                className="Mobile_Subtract-Funds btn">-</button>
            </Col>
          </Row>


    </div>
  );
}

export default AcctMobile;