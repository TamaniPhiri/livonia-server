const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const TransactionRepository = () => {
  const createTransaction = async (transactionsData) => {
    const createdTransactions = [];

    for (const data of transactionsData) {
      const createdTransaction = await Prisma.transactions.create({
        data: {
          clientId: data.clientId,
          product: data.product,
          brand: data.brand,
          quantity: parseInt(data.quantity),
          amount: data.amount,
        },
      });

      createdTransactions.push(createdTransaction);
    }

    return createdTransactions;
  };
  const getTransaction = async () => {
    return Prisma.transactions.findMany();
  };
  const getTransactionByClientId = async (clientId) => {
    return Prisma.transactions.findMany({
      where: {
        clientId:parseInt(clientId)
      }
    });
  };
  const updateTransaction = async (id, data) => {
    return Prisma.transactions.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  };
  const deleteTransaction = async (id) => {
    return Prisma.transactions.delete({
      where: {
        id: parseInt(id),
      },
    });
  };
  return {
    createTransaction,
    deleteTransaction,
    getTransaction,
    getTransactionByClientId,
    updateTransaction,
  };
};

module.exports = TransactionRepository();
