const TransactionRepository = require('../repository/transaction-repo');

const TransactionService =()=>{
    const createTransaction = async(data)=>{
        const transaction = await TransactionRepository.createTransaction(data);
        return transaction;
    }
    const getTransaction = async()=>{
        const transaction = await TransactionRepository.getTransaction();
        if(transaction<=0){
            throw new Error("no transaction found");
        }
        return transaction;
    }
    const getTransactionByClient = async(clientId)=>{
        const transaction = await TransactionRepository.getTransactionByClientId(clientId);
        if(!transaction){
            throw new Error("no transaction by that client");
        }
        return transaction;
    }
    const updateTransaction = async(id,data)=>{
        const transaction = await TransactionRepository.updateTransaction(id,data);
        return transaction;
    }
    const deleteTransaction = async(id)=>{
       const transaction = await TransactionRepository.deleteTransaction(id);
       return transaction;
    }
    return{createTransaction,getTransaction,getTransactionByClient,updateTransaction,deleteTransaction
}
}

module.exports = TransactionService();