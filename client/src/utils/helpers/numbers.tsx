// import { API } from '../index';

export default {

    // generateAcctNum: () => {    
    //     API.getAcctNums()
    // },

    returnAcctNum: () => {
        const myNum = Math.floor((Math.random() * 999999) + 7000000);
        console.log(myNum)
        return myNum;
    },

    // need a random num generator for ids in transactions

    // need a buble sort checker for uniqueness
    
};