const TransactionRepository = require("../repository/transaction-repo");

const TransactionService = () => {
  const createTransaction = async (data) => {
    try {
      const transaction = await TransactionRepository.createTransaction(data);
      return transaction;
    } catch (error) {
      console.error("Error creating transaction:", error);
      throw new Error("Failed to create transaction");
    }
  };

  const getTransaction = async (batchId) => {
    const transaction = await TransactionRepository.getTransactionsByBatchId(
      batchId
    );
    if (transaction <= 0) {
      throw new Error("no transaction found");
    }
    return transaction;
  };

  const getTransactions = async () => {
    const transaction = await TransactionRepository.getTransactions();
    if (transaction <= 0) {
      throw new Error("no transaction found");
    }
    return transaction;
  };

  const getTransactionByPayment = async (payment) => {
    const transaction = await TransactionRepository.getTransactionsByPayment(
      payment
    );
    if (transaction <= 0) {
      throw new Error("no transaction found");
    }
    return transaction;
  };

  const getTransactionByClient = async (clientId) => {
    const transaction = await TransactionRepository.getTransactionByClientId(
      clientId
    );
    return transaction;
  };
  const updateTransaction = async (id, data) => {
    const transaction = await TransactionRepository.updateTransaction(id, data);
    return transaction;
  };
  const updateTransactionsByBatchId = async (batchId, payment, amountTendered, balance) => {
    return TransactionRepository.updateTransactionsByBatchId(batchId, payment, amountTendered, balance);
  };
  const deleteTransaction = async (id) => {
    const transaction = await TransactionRepository.deleteTransaction(id);
    return transaction;
  };
  return {
    createTransaction,
    getTransactions,
    getTransaction,
    getTransactionByPayment,
    getTransactionByClient,
    updateTransaction,
    updateTransactionsByBatchId,
    deleteTransaction,
  };
};

module.exports = TransactionService();
