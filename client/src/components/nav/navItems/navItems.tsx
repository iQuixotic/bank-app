import * as React from "react";

import './style.css';

interface IProps {
    children?: string,    
}


const NavItems = (props: IProps) => {
    return (
        <div className='NavItems'>            
            <nav>
                <ul className='NavItems-UL'>
                    <li className='NavItems-LI'>Accouts</li>
                    <li className='NavItems-LI'>VIP</li>
                    <li className='NavItems-LI'>New</li>           
                    <li className='NavItems-LI'>Previous</li>                             
                </ul>
            </nav>
        </div>
    );
}

export default NavItems;