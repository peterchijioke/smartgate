const router = require("express").Router();

const User = require("../controlers/UserControllers");

router.post("/create", User.create);

module.exports = router;

// mysql://
// b1a2e6313873db
// :73ccd8cb
// @
// us-cdbr-east-02.cleardb.com
// /heroku_ff6db694cb616c9?reconnect=true
