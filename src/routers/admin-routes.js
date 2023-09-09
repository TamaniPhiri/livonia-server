const router = require('express').Router();
const adminController = require('../controller/admin-controller');

router.post('/',adminController.createAdmin);
router.put('/:id',adminController.updateAdmin);
router.get('/',adminController.getAdmins);
router.get('/:id',adminController.getAdminById);
router.delete('/:id',adminController.deleteAdmin);

module.exports=router;