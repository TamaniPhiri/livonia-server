const AdminService = require("../service/admin-service");

const adminController = () => {
  const createAdmin = async (req, res) => {
    try {
      const admin = await AdminService.createAdmin(req.body);
      res.status(200).json(admin);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
  const getAdmins = async (req, res) => {
    try {
      const admin = await AdminService.getAllAdmin();
      res.status(200).json(admin);
    } catch (error) {
      console.log(error);
      res.status(200).json(error);
    }
  };
  const getAdminById = async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await AdminService.getAdminById(id);
      res.status(200).json(admin);
    } catch (error) {
      console.log(error);
      res.status(200).json(error);
    }
  };
  const updateAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updatedAdmin = await AdminService.updateAdmin(id, name);
      res.status(200).json(updatedAdmin);
    } catch (error) {
      console.log(error);
      res.status(200).json(error);
    }
  };
  const deleteAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      await AdminService.deleteAdmin(id);
      res.status(200).json("Client deleted");
    } catch (error) {
      console.log(error);
      res.status(200).json(error);
    }
  };
  return { createAdmin, getAdminById, getAdmins, updateAdmin, deleteAdmin };
};

module.exports = adminController();
