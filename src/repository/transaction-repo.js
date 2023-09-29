const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

let batchCounter = 1; // Initialize the batch counter

// Function to generate a unique batchId for each batch
function generateBatchId() {
  const autoIncrementPart = batchCounter.toString().padStart(4, "0"); // Auto-incrementing part
  const randomPart = generateRandomString(4); // Random part

  const batchId = `${autoIncrementPart}-${randomPart}`;
  return batchId;
}

const TransactionRepository = () => {
  const createTransaction = async (transactionsData) => {
    const createdTransactions = [];
    const batchId = generateBatchId();

    for (const data of transactionsData) {
      const createdTransaction = await Prisma.transactions.create({
        data: {
          clientId: data.clientId,
          product: data.product,
          brand: data.brand,
          quantity: parseInt(data.quantity),
          amount: data.amount,
          batchId,
        },
      });

      createdTransactions.push(createdTransaction);
    }

    return createdTransactions;
  };
  const getTransactionsByBatchId = async (batchId) => {
    return Prisma.transactions.findMany({
      where: {
        batchId: batchId,
      },
    });
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
    getTransactionsByBatchId,
    getTransactionByClientId,
    updateTransaction,
  };
};

module.exports = TransactionRepository();
