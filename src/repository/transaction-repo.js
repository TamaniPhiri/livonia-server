const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const TransactionRepository=()=>{
    const createTransaction = async(data)=>{
        return Prisma.transactions.create({
            data,
        })
    }
    const getTransaction = async()=>{
        return Prisma.transactions.findMany();
    };
    const getTransactionByClientId = async(clientId)=>{
        return Prisma.transactions.findMany({
            where:{
                clientId,
            }
        })
    }
    const updateTransaction = async(id,data)=>{
        return Prisma.transactions.update({
            where:{
                id:parseInt(id),
            },
            data,
        })
    }
    const deleteTransaction = async(id)=>{
        return Prisma.transactions.delete({
            where:{
                id:parseInt(id),
            }
        })
    }
    return{createTransaction, deleteTransaction,getTransaction,getTransactionByClientId,updateTransaction}
}

module.exports = TransactionRepository();