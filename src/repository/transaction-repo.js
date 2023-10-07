const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

let batchCounter = 1;

// Function to generate a unique batchId for each batch
function generateBatchId() {
  const autoIncrementPart = batchCounter.toString().padStart(4, "0");
  const randomPart = generateRandomString(4);

  const batchId = `${autoIncrementPart}-${randomPart}`;
  return batchId;
}

const TransactionRepository = () => {
  const createTransaction = async (transactionsData) => {
    const createdTransactions = [];
    const batchId = generateBatchId();

    if (!Array.isArray(transactionsData)) {
      throw new Error("transactionsData is not an array");
    }

    for (const data of transactionsData) {
      const createdTransaction = await Prisma.transactions.create({
        data: {
          clientId: data.clientId,
          product: data.product,
          brand: data.brand,
          quantity: parseInt(data.quantity),
          amount: data.amount,
          batchId,
          total: data.total,
          payment: data.payment,
          amountTendered: parseInt(data.amountTendered),
          balance: parseInt(data.balance),
          discount:parseInt(data.discount),
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
        clientId: parseInt(clientId),
      },
    });
  };

  const getTransactionsByPayment = async (payment) => {
    return Prisma.transactions.findMany({
      where: {
        payment: payment,
      },
      include: {
        client: {
          select: {
            name: true,
            contact: true,
          },
        },
      },
    });
  };

  const getTransactions = async () => {
    return Prisma.transactions.findMany();
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

  const updateTransactionsByBatchId = async (
    batchId,
    payment,
    amountTendered
  ) => {
    try {
      const transactions = await Prisma.transactions.findMany({
        where: { batchId },
      });

      const updatedTransactions = await Promise.all(
        transactions.map(async (transaction) => {
          const { amountTendered: existingAmountTendered, balance } =
            transaction;

          const newAmountTendered =
            parseFloat(existingAmountTendered) + parseFloat(amountTendered);
          const newBalance = parseFloat(balance) - parseFloat(amountTendered);

          return Prisma.transactions.update({
            where: { id: transaction.id },
            data: {
              payment,
              amountTendered: newAmountTendered,
              balance: newBalance,
            },
          });
        })
      );

      return updatedTransactions;
    } catch (error) {
      throw error;
    }
  };
  return {
    createTransaction,
    deleteTransaction,
    getTransactions,
    getTransactionsByBatchId,
    getTransactionByClientId,
    getTransactionsByPayment,
    updateTransaction,
    updateTransactionsByBatchId,
  };
};

module.exports = TransactionRepository();
