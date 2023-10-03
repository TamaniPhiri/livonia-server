const router = require('express').Router();
const TransactionController = require('../controller/transaction-controller');

router.post('/',TransactionController.createTransaction);
router.get('/',TransactionController.getTransactions);
router.get('/payment',TransactionController.getTransactionByPayment);
router.get('/batch',TransactionController.getTransaction);
router.get('/:id',TransactionController.getTransactionByClientById);
router.put('/:id',TransactionController.updateTransaction);
router.delete('/:id',TransactionController.deleteTransaction);

module.exports= router;