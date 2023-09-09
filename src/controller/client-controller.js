const clientService = require("../service/client-service");

const ClientController = () => {
    const getClients = async (req, res) => {
      try {
        const clients = await clientService.getAllClients();
        res.status(200).json(clients);
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
    };
    const getClientById = async (req, res) => {
      try {
        const { id } = req.params;
        const client = await clientService.getClientsById(id);
        if (!client) {
          return res.status(400).json("Book not found");
        }
        res.status(200).json(client);
      } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
      }
    };

  const createClient = async (req, res) => {
    try {
      const clients = await clientService.createClient(req.body);
      res.status(200).json(clients);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  const updateClient = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updatedClient = await clientService.updateClientById(id, name);
      res.status(200).json(updatedClient);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };

  const deleteClientById = async (req, res) => {
    try {
      const { id } = req.params;
      await clientService.deleteClient(id);
      res.status(200).json("Client deleted");
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };

  return {
    getClients,
    createClient,
    updateClient,
    deleteClientById,
    getClientById
  };
};

module.exports = ClientController();
