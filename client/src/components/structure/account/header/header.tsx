import React from "react";

import './style.css';

const Header = (props: any) => {
    return(
        <div className='Header'>
            <a href={props.path}>
                <span className='Header_Name'>
                {props.nameLast}, {props.nameFirst}</span>
            </a>
            <span className='Header_Number'>{props.acctNum}</span>
            <span id={props._id}
            onClick={props.delClick}
            className="Header_Delete">X</span>
        </div>
    );
}

export default Header;