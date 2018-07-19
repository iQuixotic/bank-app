import * as React from "react";
import './style.css';

interface IProps {
    id?: string,
    itype: string,
    label: string,
    labelfor: string,
    required?: boolean,
    onChange?: any,
    type: string,
    pattern?: any,
    keyPress?: any
}

const Input = (props: IProps) => {
    let inputElement = null;

    switch (props.itype) {
        case ('input'):
            inputElement = <input 
            type={props.type} 
            pattern={props.pattern}
            id={props.id}
            placeholder={props.label} 
            required={true} 
            name={props.labelfor} 
            className='Input-Element' 
            onChange={props.onChange}
            onKeyPress={props.keyPress}
            />
            break;
        case ('textarea'):
            inputElement = <textarea name={props.labelfor} className='Input-Element' {...props}/>
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
                <label className='Label' htmlFor={props.labelfor}>{props.label}</label>
            </div>
        );
}

export default Input;