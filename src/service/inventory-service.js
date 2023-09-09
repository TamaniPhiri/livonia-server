const InventoryRepository = require('../repository/inventory-repo');

const InventoryService = () => {
    const createInventory = async(data)=>{
        const inventory = await InventoryRepository.createInventory(data);
        return inventory;
    }
    const getAllInventory = async() => {
        const inventory = await InventoryRepository.getInventory();
        if(inventory<=0){
            throw new Error("no goods found");
        }
        return inventory;
    }
    const getInventoryByName = async(name) => {
        const inventory = await InventoryRepository.getInventoryByName(name);
        if(!inventory){
            throw new Error("no goods found by that name");
        }
        return inventory;
    }
    const deleteInventory = async(id) => {
        const inventory = await InventoryRepository.deleteInventory(id);
        return inventory;
    }
    const updateInventory = async(id,data) => {
        const inventory = await InventoryRepository.updateInventory(id,data);
        return inventory;
    }
    return {getAllInventory,createInventory,getInventoryByName,deleteInventory,updateInventory}
}

module.exports = InventoryRepository();