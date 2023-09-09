const UserRepository = require('../repository/user-repo');

const UserService =()=>{
    const createUser=async(data)=>{
        const user = await UserRepository.createUser(data);
        return user;
    }
    const getAllUsers=async()=>{
        const user = await UserRepository.getUsers();
        if(user<=0){
            throw new Error("users not found");
        }
        return user;
    }
    const getUsers=async(id)=>{
        const user = await UserRepository.getUserBYId(id);
        if(!user){
            throw new Error("admin not found");
        }
        return user;
    }
    const updateUser=async(id,data)=>{
        const user = await UserRepository.updateUser(id,data);
        return user;
    }
    const deleteUser=async(id)=>{
        const user = await UserRepository.deleteUser(id);
        return user;
    }
    return{createUser,getAllUsers,getUsers,updateUser,deleteUser}
}
module.exports = UserService();