const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const InventoryRepository = () => {
  const createInventory = async (data) => {
    return Prisma.inventory.create({
      data: {
        name: data.name,
        brand: data.brand,
        size: data.size,
        quantity: parseInt(data.quantity),
        price: data.price,
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

  const updateInventoryById = async (id, data) => {
    const currentInventory = await Prisma.inventory.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!currentInventory) {
      throw new Error(`Inventory item with ID ${id} not found.`);
    }

    const newQuantity = currentInventory.quantity + parseInt(data.quantity);

    return Prisma.inventory.update({
      where: {
        id: parseInt(id),
      },
      data: {
        quantity: newQuantity,
        brand:data.brand,
      },
    });
  };

  const updateInventory = async (ids, data) => {
    const idArray = Array.isArray(ids) ? ids : [ids];

    // Fetch all the current inventory items
    const currentInventories = await Prisma.inventory.findMany({
      where: { id: { in: idArray.map((id) => parseInt(id)) } },
    });
    if (currentInventories.length !== idArray.length) {
      throw new Error("Some inventory items were not found.");
    }

    const updatedInventories = [];

    for (let i = 0; i < currentInventories.length; i++) {
      const currentInventory = currentInventories[i];
      const id = currentInventory.id;

      const newQuantity = currentInventory.quantity - parseInt(data.quantity);
      if (newQuantity < 0) {
        throw new Error(`Not enough inventory quantity for item with ID ${id}`);
      }

      const updatedInventory = await Prisma.inventory.update({
        where: { id },
        data: {
          quantity: newQuantity,
        },
      });

      updatedInventories.push(updatedInventory);
    }

    return updatedInventories;
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
    updateInventoryById,
    updateInventory,
    deleteInventory,
  };
};

module.exports = InventoryRepository();
