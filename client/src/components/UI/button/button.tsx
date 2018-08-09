import * as React from "react";
import './style.css';

const Button = (props: any) => {

        return(            
                <button onClick={props.click} className='btn Button'>{props.children}</button>            
        );
}

export default Button;