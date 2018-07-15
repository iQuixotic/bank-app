import * as React from "react";
import './style.css';

interface IProps {
    itype: string,
    label: string,
    labelFor: string,
    required?: boolean
}

const Input = (props: IProps) => {
    let inputElement = null;

    switch (props.itype) {
        case ('input'):
            inputElement = <input type='text' required={true} name={props.labelFor} className='Input-Element' {...props}/>
            break;
        case ('textarea'):
            inputElement = <textarea name={props.labelFor} className='Input-Element' {...props}/>
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
                {inputElement}
                <label className='Label' htmlFor={props.labelFor}>{props.label}</label>
            </div>
        );
}

export default Input;