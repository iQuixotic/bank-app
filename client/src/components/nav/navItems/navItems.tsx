import * as React from "react";

interface IProps {
    nav1: string, link1: string,
    nav2?: string, link2?: string,
    nav3?: string, link3?: string,
    nav4?: string, link4?: string,
    nav5?: string, link5?: string,
}

import './style.css';


const NavItems = (props: IProps) => {
    return (
        <ul className='NavItems'>
            <li className='NavItems-LI'><a href={props.link1}>{props.nav1}</a></li>      
            <li className='NavItems-LI'><a href={props.link2}>{props.nav2}</a></li>        
            <li className='NavItems-LI'><a href={props.link3}>{props.nav3}</a></li>         
            <li className='NavItems-LI'><a href={props.link4}>{props.nav4}</a></li>         
            <li className='NavItems-LI'><a href={props.link5}>{props.nav5}</a></li>                                 
        </ul>
    );
}

export default NavItems;