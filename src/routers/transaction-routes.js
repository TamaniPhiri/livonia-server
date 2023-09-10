const router = require('express').Router();
const transactionController = require('../controller/transaction-controller');

router.post('/',transactionController.createTransaction);
router.get('/',transactionController.getTransaction);
router.get('/client',transactionController.getTransactionByClient);
router.put('/',transactionController.updateTransaction);
router.delete('/',transactionController.deleteTransaction);

module.exports= router;