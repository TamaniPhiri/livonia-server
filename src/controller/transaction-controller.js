const TransactionService = require('../service/transaction-service');

const TransactionController=()=>{
    const createTransaction = async(req,res)=>{
        try {
            const transaction = await TransactionController.createTransaction(req.body);
            res.status(200).json(transaction);
          } catch (error) {
            console.log(error);
            res.status(500).json(error);
          }
    }
    const getTransaction = async(req,res)=>{
        try {
            const transaction = await TransactionService.getTransaction();
            res.status(200).json(transaction);
          } catch (error) {
            console.log(error);
            res.status(200).json(error);
          }
    }
    const getTransactionByClient = async(req,res)=>{
        try {
            const { client } = req.body;
            const transaction = await TransactionService.getTransactionByClient(client);
            res.status(200).json(transaction);
          } catch (error) {
            console.log(error);
            res.status(200).json(error);
          }
    }
    const updateTransaction = async (req, res) => {
        try {
          const { id } = req.params;
          const { data } = req.body;
          const updatedTransaction = await TransactionService.updateTransaction(id, data);
          res.status(200).json(updatedTransaction);
        } catch (error) {
          console.log(error);
          res.status(200).json(error);
        }
      };
      const deleteTransaction = async (req, res) => {
        try {
          const { id } = req.params;
          await TransactionService.deleteTransaction(id);
          res.status(200).json("Transaction deleted");
        } catch (error) {
          console.log(error);
          res.status(200).json(error);
        }
      };
    return{createTransaction,getTransaction,getTransactionByClient,updateTransaction,deleteTransaction}
}

module.exports = TransactionController();