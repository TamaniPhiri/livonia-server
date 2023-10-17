const InventoryController = require('../controller/inventory-controller');
const router = require('express').Router();

router.post('/',InventoryController.createInventory);
router.get('/',InventoryController.getInventory);
router.get('/:name',InventoryController.getInventoryByName);
router.put('/:id?',InventoryController.updateInventory);
router.put('/update/:id',InventoryController.updateInventoryById);
router.put('/brand/:id',InventoryController.updateInventoryBrand);
router.delete('/:id',InventoryController.deleteInventory);

module.exports=router;