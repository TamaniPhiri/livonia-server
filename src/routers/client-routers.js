const ClientController = require('../controller/controler');
const router = require('express').Router();

router.post('/',ClientController.createClient);
router.get('/',ClientController.getClients);
router.put('/:clientId',ClientController.updateClient);

module.exports=router;