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

    withCommas: (arg: string) => {
        const decimal: string = (parseFloat(arg)-parseInt(arg, 10)).toFixed(2).substr(1)
        const str: string = (Math.abs(parseInt(arg, 10))).toString();
        const a: any = []
        const spl: any = str.split('').reverse();
        for(let i = spl.length-1; -1<i; i--) {
            if((i-2)%3 === 0 && i<spl.length-1) {
                a.push(',')
                a.push(spl[i])
            } else {
                a.push(spl[i])
            }
        }
        const b: any = a.join('')
        // console.log(b)
        return b+decimal;
    }
    
};