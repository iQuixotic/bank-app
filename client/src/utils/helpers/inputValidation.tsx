
// interface IRoutes {
    
// }

// export as object that can be used in other files for front-end input validation
export default {

    // values must be of type string
    isAString: (arg: string) => {     
       console.log('I got sent to the IVAL.isAString')
    },

    // set initial letter to uppercase for non-trivial words
    uppercaseEditor: (arg: string) => {
        console.log('I got sent to the IVAL.uppercaseEditor')
    },

    // payed to-from input must be less than 50 chars
    lengthCheck: (arg: string) => {
        console.log('I got sent to the IVAL.lengthCheck')        
    },
};