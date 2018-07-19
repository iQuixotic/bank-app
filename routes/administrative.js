const router = require("express").Router();
const adminController = require('../controllers/administrative');

// for getting all data
router.route('/') 
    .get(adminController.read);

// by id
router.route('/:id')
    .delete(adminController.erase)
    .post(adminController.update)
    
module.exports = router;