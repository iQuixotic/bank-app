import React from "react";

import './style.css';

const Line = (props: any) => {
    return(
        <div className='Line'>
            <li className={
                props.credit ? 
                'Line_Credit' :
                'Line_Debit'
            }>{props.line}</li>
        </div>
    );
}

export default Line;