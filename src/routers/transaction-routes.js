const router = require('express').Router();
const TransactionController = require('../controller/transaction-controller');

router.post('/',TransactionController.createTransaction);
router.get('/',TransactionController.getTransaction);
router.get('/client',TransactionController.getTransactionByClient);
router.put('/',TransactionController.updateTransaction);
router.delete('/',TransactionController.deleteTransaction);

module.exports= router;