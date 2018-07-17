const router = require("express").Router();
const adminController = require('../controllers/administrative');

// for getting all data
router.route('/') 
    .get(adminController.read);

router.route('/:id')
    .delete(adminController.erase)
    
module.exports = router;