import * as React from "react";
import { Row } from '../../../../components';
import { MQ } from '../../../../containers';
import { NUM } from '../../../../utils';
import './style.css';

interface IProps {
    acctNum: number, 
    balance: number,
    firstName: string,
    initial: number,
    lastName: string 
}

const LedgerTop = (props: IProps) => {

    // I have no idea why this is necessary but it is
    const parsedBal: number = parseFloat(props.balance.toString())
    const parsedDeposit: number = parseFloat(props.initial.toString())

    // keeps balance looking neat at all screen sizes
    const ledgerTopBalance: any = (
        <div id='ledgerTopBalance'>
            <MQ lowerLimit={760}>Balance: </MQ> 
            <MQ upperLimit={759}><span className='my-tooltip'>Bal: </span>
            <span className='my-tooltip-text'>Balance</span></MQ>
            <span className={`balance ${props.balance >= 0 ? 'positive' : 'negative'}`}>
            {parsedBal >= 0 ?
              `$${NUM.withCommas(parsedBal.toFixed(2))}` : `
              - $${NUM.withCommas(Math.abs(parsedBal).toFixed(2))} `
              }</span>              
        </div> 
    )
    
    // keeps initial deposit clean at all sizes
    const ledgerTopInitial: any = (
        <div> 
            <MQ lowerLimit={760}>Initial Deposit: </MQ> 
            <MQ upperLimit={759}><span className='my-tooltip'>ID: </span>
            <span className='my-tooltip-text'>Initial Deposit</span>  
            </MQ>       
            <span className='initial-depo'>
            {parsedDeposit >= 0 ?
              `$${NUM.withCommas(parsedDeposit.toFixed(2))}` : `
              - $${NUM.withCommas(Math.abs(parsedDeposit).toFixed(2))} `
              }</span>
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