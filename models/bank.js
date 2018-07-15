const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BankSchema = new Schema({

    name: {
        Last: {
            type: String,
        },
        First: {
            type: String,
        }
    },
    acct: {
        type: Number,
    },
    balance: {
        type: Number,
    },
    transactions: {
        type: Array,
    }
 
});

let Bank = mongoose.model('Bank', BankSchema);

module.exports = Bank;