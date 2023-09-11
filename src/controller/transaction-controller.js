const TransactionService = require('../service/transaction-service');

const TransactionController=()=>{
    const createTransaction = async (req, res) => {
        try {
          const transaction = await TransactionService.createTransaction(req.body);
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
    const getTransactionByClientById = async(req,res)=>{
        try {
            const { id } = req.params;
            if (!id) {
              return res.status(400).json("ID not found");
            }
            const transaction = await TransactionService.getTransactionByClient(id);
            if (transaction.length===0) {
              return res.status(404).json("No transactions found");
            }
            res.status(200).json(transaction);
          } catch (error) {
            console.log(error);
            res.status(200).json(error);
          }
    }
    const updateTransaction = async (req, res) => {
        try {
          const { id } = req.params;
          const data = req.body;
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
    return{createTransaction,getTransaction,getTransactionByClientById,updateTransaction,deleteTransaction}
}

module.exports = TransactionController();