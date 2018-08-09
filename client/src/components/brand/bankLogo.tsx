import * as React from "react";
import { Building } from '../../assets';

import './style.css';

const Logo = (props: {id: string}) => {
    return ( 
            <div className='Logo' id={props.id} >
                <img src={Building} />
            </div>
    );
}

export default Logo;