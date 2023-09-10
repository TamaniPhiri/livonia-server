const router = require('express').Router();
const TransactionController = require('../controller/transaction-controller');

router.post('/',TransactionController.createTransaction);
router.get('/',TransactionController.getTransaction);
router.get('/client/:id',TransactionController.getTransactionByClientById);
router.put('/:id',TransactionController.updateTransaction);
router.delete('/:id',TransactionController.deleteTransaction);

module.exports= router;