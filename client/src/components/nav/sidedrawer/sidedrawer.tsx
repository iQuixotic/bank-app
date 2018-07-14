import * as React from "react";

import {
    NavItems,
} from '../../../components'


interface IProps {
    children: any,
}

import './style.css';

const Sidedrawer = (props: IProps) => {
    return (
        <div className='Sidedrawer'>            
            <nav>
                <NavItems />
            </nav>
        </div>
    );
}

export default Sidedrawer;