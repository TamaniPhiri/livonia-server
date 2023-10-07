const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateProductQuantities(products) {
  try {
    for (const product of products) {
      const { productId, newQuantity } = product;

      const currentInventory = await prisma.inventory.findUnique({
        where: { id: productId },
        select: { quantity: true },
      });

      if (!currentInventory) {
        throw new Error(`Inventory item with ID ${productId} not found`);
      }

      const updatedQuantity = currentInventory.quantity - newQuantity;

      await prisma.inventory.update({
        where: { id: productId },
        data: { quantity: updatedQuantity },
      });
    }

    return { success: true, message: 'Product quantities updated successfully' };
  } catch (error) {
    console.error('Error updating product quantities:', error);
    return { success: false, message: error.message || 'Internal server error' };
  }
}

module.exports = {
  updateProductQuantities,
};
