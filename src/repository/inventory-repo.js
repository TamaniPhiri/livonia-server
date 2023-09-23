const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const InventoryRepository = () => {
  const createInventory = async (data) => {
    return Prisma.inventory.create({
      data:{
        name:data.name,
        brand:data.brand,
        size:data.size,
        quantity:parseInt(data.quantity),
        price:data.price,
      },
    });
  };
  const getInventory = async () => {
    return Prisma.inventory.findMany();
  };
  const getInventoryByName = async (name) => {
    return Prisma.inventory.findMany({
      where: {
        name,
      },
    });
  };
  const updateInventory = async (id, data) => {
    const currentInventory = await Prisma.inventory.findUnique({
      where: { id: parseInt(id) },
    });
    if (!currentInventory) {
      throw new Error(`Inventory item with id ${id} not found.`);
    }

    const newQuantity = currentInventory.quantity - parseInt(data.quantity);
    if (newQuantity <= 0) {
      throw new Error(
        `Not enough inventory quantity`
      );
    } 
    return Prisma.inventory.update({
      where: { id: parseInt(id) },
      data: {
        quantity: newQuantity,
      },
    });
  };
  const deleteInventory = async (id) => {
    return Prisma.inventory.delete({
      where: { id: parseInt(id) },
    });
  };
  return {
    createInventory,
    getInventory,
    getInventoryByName,
    updateInventory,
    deleteInventory,
  };
};

  module.exports = InventoryRepository();
