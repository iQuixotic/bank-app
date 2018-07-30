import * as React from "react";
import './style.css';



const Button = (props: any) => {

        return(            
                <button className='btn Button'>{props.children}</button>            
        );
}

export default Button;