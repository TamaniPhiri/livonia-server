const clientRepository = require("../repository/client-repo");

const ClientService = () => {
  const getAllClients = async () => {
    const clients = await clientRepository.findAllClients();
    if (clients.length <= 0) {
      throw new Error("clients found");
    }
    return clients;
  };
  const createClient = async (data) => {
    const client = await clientRepository.createClient(data);
    return client;
  };
  const updateClientById=async(id,data)=>{
    const updatedClient=await clientRepository.updateClient(id,data);
    return updatedClient;
}
  const deleteClient = async (data)=> {
    const client = await clientRepository.deleteClient(data);
    return client;
  }
  return {
    getAllClients,
    createClient,
    updateClientById,
    deleteClient
  };
};

module.exports = ClientService();
