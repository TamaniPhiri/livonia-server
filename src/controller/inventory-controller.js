const InventoryService = require("../service/inventory-service");

const InventoryController = () => {
  const createInventory = async (req, res) => {
    try {
      const inventory = await InventoryService.createInventory(req.body);
      res.status(200).json(inventory);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
  const getInventory = async (req, res) => {
    try {
      const inventory = await InventoryService.getAllInventory();
      if (inventory.length <= 0) {
        return res.status(400).json("No inventories found");
      }
      res.status(200).json(inventory);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
  const getInventoryByName = async (req, res) => {
    try {
      const { name } = req.params;
      const inventory = await InventoryService.getInventoryByName(name);
      res.status(200).json(inventory);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
  const deleteInventory = async (req, res) => {
    try {
      const { id } = req.params;
      await InventoryService.deleteInventory(id);
      res.status(200).json("inventory deleted");
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };

  const updateInventory = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedInventory = await InventoryService.updateInventory(id, data);
      res.status(200).json(updatedInventory);
    } catch (error) {
      console.log(error);
      res.status(400).json(error.message);
    }
  };
  const updateInventoryBrand = async(req,res)=>{
    const {id}=req.params;
    const data=req.body;
    try {
      const updatedInventory = await InventoryService.updateInventoryBrand(id,data);
      res.status(200).json(updatedInventory);
    } catch (error) {
      console.log(error);
      res.status(400).json(error.message);
    }
  }

  const updateInventoryById = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
      const updatedInventory =
        await InventoryService.updateInventoryById(id, { quantity });

      if (updatedInventory) {
        res.status(200).json(updatedInventory);
      } else {
        res
          .status(404)
          .json({ message: `Inventory item with ID ${id} not found.` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  return {
    getInventory,
    getInventoryByName,
    createInventory,
    deleteInventory,
    updateInventory,
    updateInventoryById,
    updateInventoryBrand,
  };
};

module.exports = InventoryController();
