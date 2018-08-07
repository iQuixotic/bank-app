import * as React from "react";

import {
    NavItems,
} from '../../../components';

import './style.css';

const Sidedrawer = () => {
    return ( 
            <div className='Sidedrawer' >
            <nav>
                <NavItems 
                nav1="Accounts" link1='/' id='Sidedrawer_ul'
                nav2="New" link2='/new'  
                />
            </nav>
            </div>
    );
}

export default Sidedrawer;