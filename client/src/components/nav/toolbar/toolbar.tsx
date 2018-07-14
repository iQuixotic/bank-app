import * as React from "react";

import {
    NavItems,
} from '../../../components'

interface IProps {
    children: string,
}

import './style.css';

const Toolbar = (props: IProps) => {
    return (
        <div className='Toolbar'>            
            <nav>
                Hello
                <NavItems/>
                {props.children}
            </nav>
        </div>
    );
}

export default Toolbar;