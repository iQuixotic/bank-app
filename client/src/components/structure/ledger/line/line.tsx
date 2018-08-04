import React from "react";

import './style.css';

interface IProps {
    _id: string,
    ammount: number, 
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
                <li className="Line-ammount">{props.ammount}</li>
                <li className="Line-party">{props.party}</li>
                <li onClick={props.del}  id={props._id} className={props.cd ? "credit": "debit"}>X</li>
            </ul>            
        </div>
    );
}

export default Line;