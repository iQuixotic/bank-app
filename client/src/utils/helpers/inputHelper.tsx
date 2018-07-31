import { IVAL } from '../index';

// helpers for front-end input validation
export default {
    
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  // HELPERS FOR NUMBER INPUTS 
    
    // only allow numbers and .'s in number input field
    isNumber: (e:any) => {
        const char = (e.which)
        char < 48 && char !== 46 || char > 58 && char !== 46 ?
        e.preventDefault() :
        IVAL.floatIsTwoDigits(e)
    },

    // only allows for 2 digits past the decimal place in a number input
    floatIsTwoDigits: (e: any) => {
        const val = e.target.value;
        e.target.value = (val.indexOf(".") >= 0) ? 
        (val.substr(0, val.indexOf(".")) + val.substr(val.indexOf("."), 2))
        : val
    },

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  // HELPERS FOR STRING INPUTS

    // verify that field has a value
    stringInputHandler: (str: string) => {
        if(str !== "") {
            console.log('yes')
            return true
        }
        console.log('no')
        return false;
    },
};