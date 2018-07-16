import axios from "axios";


interface IRoutes {
    data: object,
    id: string
}

// export all to communicate with back-end
export default {

    // READ all accounts from the database
    grabAccounts: () => {
        console.log('API route /allAccountsData hit');
        return axios.get("/allAccountsData");
    },

    // DELETE one account from database
    removeAccount: (data: IRoutes, id: IRoutes) => {
        console.log('API route /allAccountsData/:id hit');        
        return axios.get('/allAccountsData/' + id);
    },

// -------------------------------------------------------------------------

    // CREATE one new account
    createOneAccount: (data: IRoutes) => {
        console.log('API route /account/:id CREATE hit');        
        return axios.put('/account/new');
    },
    
    // READ and retrieve all information from one account
    grabOneAccount: (id: IRoutes) => {
        console.log('API route /account/:id READ hit');        
        return axios.get('/account/' + id);
    },

    // UPDATE one account with a new credit/debit
    updateOneEntry: (data: IRoutes, id: IRoutes) => {
        console.log('API route /account/:id UPDATE hit');        
        return axios.post('/account/' + id);
    },

    // DELETE one credit/debit entry from one account
    removeOneEntry: (id: IRoutes) => {
        console.log('API route /account/:id DELETE hit');        
        return axios.delete('/account/' + id);
    },

// -------------------------------------------------------------------------

};