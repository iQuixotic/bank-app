
import * as React from "react";

// // import components
import {
  Col, Input, Row,
} from "../../components";

interface IState {
  hasInput: boolean
}

import './style.css';


class Account extends React.Component {
  public state: IState = {
    hasInput: true,
  }




  public render() {
    return (
      <div className='card Account'>
        <Row>
          <span className='Account_Name'>Warrick, Trey</span>
          <span className='Account_Number'>8949504</span>
          <span className="Account_Delete">X</span>
        </Row>

        <Row>
          <Col size="md-5">
          <Row>
          <div className="Account_Row-Space">
            <Col size="md-5">
              <Row>
                <div className='Account_Balance'>
                  Balance: <span id='Balance'>$1,678.98</span>
                </div>
              </Row>
              <Row>
                <div className="Account_Payed-To">
                <Input
                  itype='input'
                  label='Payed To/From'
                  labelFor='payedFrom'
                />
                </div>
               
              </Row>
            </Col>
          </div>
        </Row>

          </Col>
          <Col size="md-7">
              <Row>
                <Col size='md-8'>
                  <Input
                    itype='input'
                    label='Add Funds'
                    labelFor='add'
                  />                                
                </Col>
                <Col size='md-1'/>  
                <Col size='md-3'>
                <div className="padd-down">                  
                  <button className="Account_Add-Funds btn">+</button>
                </div>
                </Col>
              </Row>

              <Row>
                <Col size='md-8'>
                  <Input
                    itype='input'
                    label='Subtract Funds'
                    labelFor='subtract'
                  />
                </Col>
                <Col size='md-1'/>

                <Col size='md-3'>
                <div className="padd-down">                  
                  <button className="Account_Subtract-Funds btn">-</button>
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