import * as React from "react";

interface IProps {
    id?: string,
    nav1: string, link1: string,
    nav2?: string, link2?: string
}

import './style.css';


const NavItems = (props: IProps) => {
    return (
        <ul id={props.id} className='NavItems'>
            <li  className='NavItems-LI'><a href={props.link1}>{props.nav1}</a></li>      
            <li  className='NavItems-LI'><a href={props.link2}>{props.nav2}</a></li>                                 
        </ul>
    );
}

export default NavItems;