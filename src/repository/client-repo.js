const { PrismaClient, Prisma } = require("@prisma/client");

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
        data: {
          name: data,
        },
      });
    }

    const deleteClient = async (id) => {
      return prisma.book.delete({
        where: {
          id:parseInt(id)
        },
      });
    };
    return {
      findAllClients,
      deleteClient,
      createClient,
      updateClient
    };
  };

  module.exports = ClientRepository();
