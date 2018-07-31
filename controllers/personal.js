// const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // create a new account
     add: function(req, res) {
      console.log('add new controller hit');
      console.log(req.body);


      db.Bank
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))
      },

    // return all information from one account in the database
    read: function(req, res) {
      console.log('add controller hit');
      db.Bank            
        .findById(req.params.id)
        .then((dbModel) => { res.json(dbModel) })
        .catch(err => res.status(422).json(err));
    },

    // update a single account
    update: function(req, res) {
      console.log('update controller hit');
      console.log(req.params.id);
      console.log(req.body);
      db.Bank
        .findByIdAndUpdate(req.params.id, {$push:  {transactions: req.body}}, {new: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))
    },

    // delete a single record (credit or debit) from a single account 
    erase: function(req, res) {
      db.Bank
        .findByIdAndUpdate(req.params.id, {$pull:  {transactions: req.body}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))
    }

}