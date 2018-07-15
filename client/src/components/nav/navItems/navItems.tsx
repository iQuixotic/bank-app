import * as React from "react";

interface IProps {
    nav1: string,
    nav2?: string,
    nav3?: string,
    nav4?: string,
    nav5?: string,
}

import './style.css';


const NavItems = (props: IProps) => {
    return (
        <ul className='NavItems'>
            <li className='NavItems-LI'>{props.nav1}</li>      
            <li className='NavItems-LI'>{props.nav2}</li>        
            <li className='NavItems-LI'>{props.nav3}</li>        
            <li className='NavItems-LI'>{props.nav4}</li>        
            <li className='NavItems-LI'>{props.nav5}</li>                                
        </ul>
    );
}

export default NavItems;