const path = require("path");
const router = require('express').Router();
const adminRoutes = require('./administrative');
const personalRoutes = require('./personal');

// tell the application when to use these routes
router.use('/admin', adminRoutes);
router.use('/personal', personalRoutes);

// if no routes are hit, go to react app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
