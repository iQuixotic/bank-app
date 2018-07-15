import * as React from "react";

interface IProps {
    size: string,
    children: any
}

const Col = (props: IProps ) => {
    return(
        <div className={props.size.split(" ").map(size => "col-" + size).join(" ")}>
            {props.children}
        </div>
    );
}

export default Col;