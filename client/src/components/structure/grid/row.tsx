import * as React from "react";

interface IProps {
    children: any
}

const Row = (props: IProps ) => {
    return(
        <div className='row'>
            {props.children}
        </div>
    );
}

export default Row;