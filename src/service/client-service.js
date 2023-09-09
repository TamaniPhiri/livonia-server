const clientRepository = require("../repository/client-repo");

const ClientService = () => {
  const getAllClients = async () => {
    const clients = await clientRepository.findAllClients();
    if (clients.length <= 0) {
      throw new Error("clients found");
    }
    return clients;
  };
  const getClientsById = async (id) => {
    const client = await clientRepository.findClientByID(id);
    if (!client) {
      throw new Error("client not found");
    }
    return client;
  };
  const createClient = async (data) => {
    const client = await clientRepository.createClient(data);
    return client;
  };
  const updateClientById=async(id,data)=>{
    const updatedClient=await clientRepository.updateClient(id,data);
    return updatedClient;
}
  const deleteClient = async (id,data)=> {
    const client = await clientRepository.deleteClientById(id,data);
    return client;
  }
  return {
    getAllClients,
    getClientsById,
    createClient,
    updateClientById,
    deleteClient
  };
};

module.exports = ClientService();
