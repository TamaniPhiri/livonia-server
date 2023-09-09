const UserService = require('../service/user-service');

const UserController=()=>{
    const createUser = async(req,res)=>{
        try {
            const user = await UserService.createUser(req.body);
            res.status(200).json(user);
          } catch (error) {
            console.log(error);
            res.status(500).json(error);
          }
        };

  const getUsers = async (req, res) => {
    try {
      const user = await UserService.getAllUsers();
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(200).json(error);
    }
  };
  const getUserId = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserService.getUsers(id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(200).json(error);
    }
  };
  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updateUser = await UserService.updateUser(id, name);
      res.status(200).json(updateUser);
    } catch (error) {
      console.log(error);
      res.status(200).json(error);
    }
  };
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      await UserService.deleteUser(id);
      res.status(200).json("user deleted");
    } catch (error) {
      console.log(error);
      res.status(200).json(error);
    }
  };
    return{createUser,getUsers,getUserId,updateUser,deleteUser}
}

module.exports = UserController();