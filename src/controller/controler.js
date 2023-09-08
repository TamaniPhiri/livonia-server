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
    const clientId = req.params.clientId;
    const updatedClientData = req.body;
    try {
      const updatedClient = await clientService.updateClient(
        clientId,
        updatedClientData
      );
      if (!updatedClient) {
        return res.status(404).json({ error: "Client not found" });
      }

      return res.json({
        message: "Client updated successfully",
        updatedClient,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  };
  return {
    getClients,
    createClient,
    updateClient
  };
};

module.exports = ClientController();
