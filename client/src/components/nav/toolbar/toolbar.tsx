import * as React from "react";

import {
    NavItems,
} from '../../../components'

interface IProps {
    children?: string,
}

import './style.css';

const Toolbar = (props: IProps) => {
    return (
        <nav className='Toolbar'>
            <div className="Toolbar-Main">
                Zenith Holdings
            </div>

            <div className="Toolbar-Nav">
                <NavItems
                    nav1="Accounts"
                    nav2="VIP"
                    nav3="New"
                />
            </div>

            {props.children}
        </nav>
    );
}

export default Toolbar;