const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ClientRepository = () => {

    const createClient = async (data) => {
        return prisma.client.create({
          data,
        });
      };

    const findAllClients = async () => {
      return prisma.client.findMany();
    };
    const findClientByID = async (id) => {
      return prisma.client.findUnique({
        where: {
          id:parseInt(id)
        },
      });
    };

    const updateClient = async (id, data) => {
      return prisma.client.update({
        where: {
          id: parseInt(id),
        },
        data
      });
    }

    const deleteClientById = async (id) => {
      return prisma.client.delete({
        where: {
          id:parseInt(id)
        },
      });
    };
    return {
      findAllClients,
      deleteClientById,
      createClient,
      updateClient,
      findClientByID
    };
  };

  module.exports = ClientRepository();
