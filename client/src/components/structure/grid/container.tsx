import * as React from "react";

interface IProps {
    children: any
}

const Container = (props: IProps ) => {
    return(
        <div className='container'>
            {props.children}
        </div>
    );
}

export default Container;