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
};