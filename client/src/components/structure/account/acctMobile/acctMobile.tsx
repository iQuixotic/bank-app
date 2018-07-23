import React from "react";

import './style.css';

const AcctMobile = (props: any) => {
    return(
        <div className='Acct-Mobile'>
            {props.children}
        </div>
    );
}

export default AcctMobile;