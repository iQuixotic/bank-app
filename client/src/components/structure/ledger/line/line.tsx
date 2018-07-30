import React from "react";

import { Loader } from '../../../../containers'

import './style.css';

interface IProps {
    ammount: number, 
    cd: string,
    del: any,
    party: string,
    trans: string
}

const Line = (props: IProps) => {
    return(
        <div className='Line' {...props}>
            <ul className={
                props.cd ? 
                'Line_Credit' :
                'Line_Debit'
            }> 
                <li className="Line-type">{props.trans}</li>
                <li className="Line-ammount">{props.ammount}</li>
                <li className="Line-party">{props.party}</li>
                <li onClick={props.del} className="Line-delete">X</li>
            </ul>            
        </div>
    );
}

export default Loader(Line);