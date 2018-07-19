// const mongoose = require("mongoose");
const db = require('../models');

module.exports = {
    
    // return all global accounts from the database
    read: function(req, res) {
      console.log('admin read route hit')
      db.Bank
        .find({}) 
        .then((dbModel) => { res.json(dbModel) })
        .catch(err => res.json(err))
    },

      // update an account's balance
      update: function(req, res) {
        console.log('update balance controller hit');
        console.log(req.params.id);
        console.log(req.body);
        db.Bank
          .findByIdAndUpdate(req.params.id, {balance: req.body.balance})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.json(err))
      },

   // delete an entire account from the record
    erase: function(req, res) {
      console.log('admin erase route hit')
      db.Bank
        .findById({ _id: req.params.id })
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch(err => res.json(error))
    }

}