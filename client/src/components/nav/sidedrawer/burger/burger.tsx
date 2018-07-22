import * as React from "react";

// import {  } from '../../../components';


interface IProps {
    onClick: any,
    size: string,
}

import './style.css';

const Burger = (props: IProps) => {
    return (
        <div onClick={props.onClick} className='Burger'>            
            {props.size}
        </div>
    );
}

export default Burger;