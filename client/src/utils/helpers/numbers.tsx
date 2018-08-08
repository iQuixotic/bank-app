
// helpers for dealing with NON-INPUT related number formating and number generation
export default {

    // returns a (psuedo-random) number with one million possible outcomes
    returnAcctNum: (): number => {
        const myNum = Math.floor((Math.random() * 999999) + 7000000);
        return myNum;
    },

    // need a buble sort checker for uniqueness of rando nums

    // takes string representation of a float and returns it with 1000s digit comma formating
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
        return b+decimal;
    }
    
};