import * as React from "react";
import './style.css';

interface IProps {
    itype: string,
    label: string
}

const Input = (props: IProps) => {
    let inputElement = null;

    switch (props.itype) {
        case ('input'):
            inputElement = <input type='text' className='Input-Element' {...props}/>
            break;
        case ('textarea'):
            inputElement = <textarea className='Input-Element' {...props}/>
            break;
        case ('radio'):
            inputElement = <input type='radio' className='Input-Element' {...props}/>
            break;
        case ('checkbox'):
            inputElement = <input type='checkbox' className='Input-Element' {...props}/>
            break;
        default:
    inputElement = <input className='Input-Element' {...props} />
    }

        return(
            <div id='Input'>
                <label className='Label'>{props.label}</label>
                {inputElement}
            </div>
        );
}

export default Input;