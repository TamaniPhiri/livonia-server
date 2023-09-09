const router = require('express').Router()
const UserController = require('../controller/user-controller');

router.post('/',UserController.createUser);
router.get('/',UserController.getUsers);
router.put('/:id',UserController.updateUser);
router.delete('/:id',UserController.deleteUser);
router.get('/:id',UserController.getUserId);

module.exports=router;