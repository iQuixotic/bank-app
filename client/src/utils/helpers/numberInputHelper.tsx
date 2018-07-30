// import {  MESSAGES } from '../index';

// export as object that can be used in other files for front-end input validation
export default {
    
    
// only allow numbers and .'s in number input field
    isNumber: (e:any) => {
    const char = (e.which)
    if(char < 48 && char !== 46 || char > 58 && char !== 46) {
        e.preventDefault()
    } 
  }

};