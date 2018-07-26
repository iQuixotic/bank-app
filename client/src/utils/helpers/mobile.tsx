// import { Sidedrawer } from "../../components";

// window.addEventListener("resize", this.updatePredicate);

// interface IRoutes {
    
// }

// export as object that can be used in other files for front-end input validation
export default {

    // only allow numbers to be typed into money related fields
    scrollShadow: () => {
        console.log('I am helping with the scroll')
    },
    
    // updatePredicate: () => {
    //     // this.setState({ screenSize: window.innerWidth });
    //     console.log(window.innerWidth)
    // },

   checkScreenSize: () => {
    console.log(window.innerWidth)
    return window.innerWidth;
   }


};