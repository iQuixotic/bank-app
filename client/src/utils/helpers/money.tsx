// import { default as Account } from '../../containers';

// export as object that can be used in other files for front-end input validation
export default {

    noNans: (arg: any) => {        
        let retVal: boolean = true;
        isNaN(arg) ? 
        retVal = false : 
        retVal = true
        console.log(isNaN(arg))
        console.log(retVal)
        return retVal;
    },

    
// addEventListener("keydown", function(e) {
//     // prevent: "e", "=", ",", "-", "."
//     if ([69, 187, 188, 189, 190].includes(e.keyCode)) {
//       e.preventDefault();
//     }
//   })


    // check for NaNs and numbers
    isNumber: (e: any) => {
        console.log(e)
    },

    // $ numbers must have .00 (two decimal places)
    convertNums: (num: number) => {
        // myNumber = parseInt(num.toFixed(2));
        // false ?
        // console.log('true') :
        console.log('fdsafsd')
    },

    // maximum transaction limit set to 999,999.99
    transLimit: (num: number) => {
        console.log('i got sent to the MONEY.transLimit')  
    },

};