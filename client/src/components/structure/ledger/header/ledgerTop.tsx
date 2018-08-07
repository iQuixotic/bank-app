import * as React from "react";

import { Row } from '../../../../components';

import { MQ } from '../../../../containers';

interface IProps {
    acctNum: number, 
    balance: number,
    firstName: string,
    initial: number,
    lastName: string 
}

import './style.css';

const LedgerTop = (props: IProps) => {

    const ledgerTopBalance: any = (
        <div>
            <MQ lowerLimit={760}>Balance: </MQ> 
            <MQ upperLimit={759}>Bal: </MQ>
            <span className="balance">${props.balance}</span>
        </div> 
    )
    
    const ledgerTopInitial: any = (
        <div> 
            <MQ lowerLimit={760}>Initial Deposit: </MQ> 
            <MQ upperLimit={759}>ID: </MQ>
            <span className="initial-depo">${props.initial}</span>
        </div>
    )

    return (
    <div className='LedgerTop container'>
        <Row>
        <div className="LedgerTop_Name">
            {props.lastName}, {props.firstName}
        </div> 
        
        <div className="LedgerTop_Acct-Num">
            <span id='act'>{props.acctNum}</span>
        </div> 
        </Row>
        <MQ lowerLimit={400}>
            <Row>
            <div className="LedgerTop_Balance">
                {ledgerTopBalance}
            </div> 
            <div className="LedgerTop_Initial" >
                {ledgerTopInitial}
            </div>        
            </Row>
        </MQ>
        <MQ upperLimit={399}>
            <Row>
                <div className="LedgerTop_Initial" >
                    {ledgerTopInitial}
                </div>
            </Row>
            <Row>
                <div className="LedgerTop_Balance">
                    {ledgerTopBalance}
                </div>
            </Row>
        </MQ>
    </div>
  );
}

export default LedgerTop;