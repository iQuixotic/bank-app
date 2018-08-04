import React from "react";

import './style.css';

interface IProps {
    _id: string,
    acctNum: number,
    delClick: any,
    nameFirst: string,
    nameLast: string,
    path?: any,    
}

const Header = (props: IProps) => {
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