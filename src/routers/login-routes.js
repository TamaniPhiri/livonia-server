const { adminLogin } = require('../controller/login-controller');
const router = require('express').Router()

router.post('/',adminLogin);

module.exports=router;