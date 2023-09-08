const ClientController = require('../controller/controller');
const clientService = require('../service/client-service');
const router = require('express').Router();

router.post('/',ClientController.createClient);
router.get('/',ClientController.getClients);
router.put('/:id',ClientController.updateClient);
router.delete('/:id',ClientController.deleteClientById);

module.exports=router;