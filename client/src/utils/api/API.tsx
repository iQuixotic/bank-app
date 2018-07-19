import axios from "axios";


interface IRoutes {
    data: any,
    id: string
}

// export as object that can be used in other files to communicate with back-end
export default {

    // READ all accounts from the database
    grabAccounts: () => {
        console.log('API route /admin/ hit');
        return axios.get('/admin');
    },

    // UPDATE the balance of one account
    updateBalance: (data:IRoutes, id: IRoutes) => {
        console.log('API route for updating balance hit');
        return axios.post('/admin/' + id, data);
    },

    // DELETE one account from database
    removeAccount: (id: IRoutes) => {
        console.log('API route /allAccountsData/:id hit');        
        return axios.delete('/admin/' + id);
    },

// -------------------------------------------------------------------------

    // CREATE one new account
    createOneAccount: (data: IRoutes) => {
        console.log('API route /account/:id CREATE hit');        
        return axios.put('/personal/account/new');
    },
    
    // READ and retrieve all information from one account
    grabOneAccount: (id: IRoutes) => {
        console.log('API route /account/:id READ hit');        
        return axios.get('/personal/account/' + id);
    },

    // UPDATE one account with a new credit/debit
    updateOneEntry: (data: IRoutes, id: IRoutes) => {
        console.log('API route /account/:id UPDATE hit');        
        return axios.post('/personal/account/' + id, data);
    },

    // DELETE one credit/debit entry from one account
    removeOneEntry: (id: IRoutes) => {
        console.log('API route /account/:id DELETE hit');        
        return axios.delete('/personal/account/' + id);
    },

// -------------------------------------------------------------------------

};