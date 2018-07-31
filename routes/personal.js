const router = require('express').Router();
const personalController = require('../controllers/personal');

// CRUD for an individual account
router.route('/account/:id')
    .get(personalController.read)
    .post(personalController.update)
    .delete(personalController.erase)

router.route('/account/new')    
    .put(personalController.add)
    
module.exports = router;