const InventoryController = require('../controller/inventory-controller');
const router = require('express').Router();

router.post('/',InventoryController.createInventory);
router.get('/',InventoryController.getInventory);
router.get('/',InventoryController.getInventoryByName);
router.put('/:id',InventoryController.updateInventory);
router.delete('/:id',InventoryController.deleteInventory);

module.exports=router;