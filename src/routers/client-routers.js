const ClientController = require('../controller/client-controller');
const router = require('express').Router();

router.post('/',ClientController.createClient);
router.get('/',ClientController.getClients);
router.put('/:id',ClientController.updateClient);
router.delete('/:id',ClientController.deleteClientById);
router.get('/:id',ClientController.getClientById);

module.exports=router;