
// interface IRoutes {
    
// }

// export as object that can be used in other files for front-end input validation
export default {

    // only allow numbers to be typed into money related fields
    numsOnly: () => {
        console.log('must be a number')
    },

    // $ numbers must have .00 (two decimal places)
    convertNums: () => {
        console.log('I am converting to .00')
    },

    // // values must be of type string
    // toString: () => {
    //     console.log('I am converting to string')
    // },

    // set initial letter to uppercase for non-trivial words
    uppercaseEditor: () => {
        console.log('I am converting to upper')
    },

    // payed to-from input must be less than 50 chars
    lengthCheck: () => {
        console.log('I am checking length')
    },

    // maximum transaction limit set to 999,999.99
    transLimit: () => {
        console.log('limit is passed')
    },

};