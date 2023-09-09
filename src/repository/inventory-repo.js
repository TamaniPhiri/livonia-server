const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient();

const InventoryRepository=()=>{
    const createInventory = async (data) => {
        return Prisma.inventory.create({data});
    }
    const getInventory = async ()=>{
        return Prisma.inventory.findMany()
    }
    const getInventoryByName = async(name)=>{
        return Prisma.inventory.findMany({
            where:{
                name
            }
        })
    }
    const updateInventory = async(id,data)=>{
        return Prisma.inventory.update({
            where:{id:parseInt(id)},
            data
        })
    }
    const deleteInventory = async(id)=>{
        return Prisma.inventory.delete({
            where:{id:parseInt(id)}
        })
    }
    return{createInventory,getInventory,getInventoryByName,updateInventory,deleteInventory}
}

module.exports= InventoryRepository();