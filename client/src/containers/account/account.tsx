
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

          <div className="Account_Row-Space">
            <Col size="md-5">
              <div className='Account_Balance'>
                Balance: <span id='Balance'>$1,678.98</span>
              </div>
            </Col>



            <Col size="md-7">          
            <Row>             
              <Input
                itype='input'
                label='Add Funds'
              />
              <button className="Account_Add-Funds btn">+</button>
            </Row>

            <Row>                
              <Input
                itype='input'
                label='Subtract Funds'
              />
              <button className="Account_Subtract-Funds btn">-</button>
            </Row>
            </Col>
          </div>
        </Row>


      </div>
    );
  }
}

export default Account;