const InventoryService = require('../service/inventory-service');

const InventoryController = () => {
    const createInventory = async(req,res)=>{
        try {
            const inventory = await InventoryService.createInventory(req.body);
            res.status(200).json(inventory);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
    const getInventory = async(req,res)=>{
        try {
            const inventory = await InventoryService.getAllInventory();
            if(inventory.length<=0){
                return res.status(400).json("No inventories found");
            }
            res.status(200).json(inventory);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
    const getInventoryByName = async(req,res)=>{
        try {
            const{name} = req.body;
            const inventory = await InventoryService.getInventoryByName(name);
            res.status(200).json(inventory);
        }catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
    const deleteInventory = async(req,res)=>{
        try {
            const { id } = req.params;
            await InventoryService.deleteInventory(id);
            res.status(200).json("Client deleted");
          } catch (error) {
            console.log(error);
            res.status(400).json(error);
          }
    }
    const updateInventory = async (req, res) => {
        try {
          const { id } = req.params;
          const data = req.body;
          const updatedInventory = await InventoryService.updateInventory(id,data);
          res.status(200).json(updatedInventory);
        } catch (error) {
          console.log(error);
          res.status(400).json(error);
        }
      };
    return{getInventory,getInventoryByName,createInventory,deleteInventory,updateInventory}
}

module.exports = InventoryController();