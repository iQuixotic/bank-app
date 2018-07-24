import * as React from "react";

import {
    NavItems,
} from '../../../components';


interface IProps {
    children?: any,
    // showing: boolean
}

import './style.css';

const Sidedrawer = (props: IProps) => {
    return ( 
            <div className='Sidedrawer' >
            <nav>
                <NavItems 
                nav1="Accounts" link1='/'
                />
            </nav>
            </div>
    );
}

export default Sidedrawer;