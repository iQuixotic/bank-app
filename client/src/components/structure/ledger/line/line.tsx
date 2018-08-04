import React from "react";

import './style.css';

interface IProps {
    _id: string,
    ammount: any, 
    cd: any,
    del: any,
    party: string,
    trans: string
}

const Line = (props: IProps) => {
    return(
        <div className='Line'>
            <ul className={
                props.cd ? 
                'Line_Credit' :
                'Line_Debit'
            }> 
                <li className="Line-type">{props.trans}</li>
                <li id={`line ${props._id}`} className="Line-ammount">{parseFloat(props.ammount).toFixed(2)}</li>
                <li className="Line-party">{props.party}</li>
                <li onClick={props.del}  id={props._id} className={props.cd ? "credit": "debit"}>X</li>
            </ul>            
        </div>
    );
}

export default Line;