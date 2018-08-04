import * as React from "react";

import { Row } from '../../../../components';

interface IProps {
    acctNum: number, 
    balance: number,
    firstName: string,
    lastName: string 
}

import './style.css';

const LedgerTop = (props: IProps) => {
    return (
    <div className='LedgerTop'>
        <Row>
        <div className="LedgerTop_Name">
            {props.lastName}, {props.firstName}
        </div> 

        <div className="LedgerTop_Acct-Num">
            {props.acctNum}
        </div> 
        </Row>
        <div className="LedgerTop_Balance">
            ${props.balance}
        </div> 
    </div>
  );
}

export default LedgerTop;