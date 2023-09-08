const ClientController = require('../controller/controller');
const router = require('express').Router();

router.post('/',ClientController.createClient);
router.get('/',ClientController.getClients);
router.put('/:id',ClientController.updateClient);

module.exports=router;