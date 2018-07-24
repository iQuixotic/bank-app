import * as React from "react";

interface IProps {
    children: any
}

const Div = (props: IProps ) => {
    return(
        <div>
            {props.children}
        </div>
    );
}

export default Div;