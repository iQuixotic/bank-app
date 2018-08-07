import * as React from "react";

import { Building } from '../../components';

import './style.css';

const Logo = (props: any) => {
    return ( 
            <div className='Logo' id={props.id} >
                <img src={Building} />
            </div>
    );
}

export default Logo;