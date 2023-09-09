const AdminRepository = require('../repository/admin-repo');

const AdminService=()=>{
    const createAdmin = async(data)=>{
        const admin = await AdminRepository.createAdmin(data);
        return admin;
    }
    const getAllAdmin = async()=>{
        const admin = await AdminRepository.getAdmin();
        if(admin<=0){
            throw new Error("admin not found");
        }
        return admin;
    }
    const getAdminById = async(id)=>{
        const admin = await AdminRepository.getAdminById(id);
        if(!admin){
            throw new Error("admin not found");
        }
        return admin;
    }
    const updateAdmin = async(id,data)=>{
        const admin = await AdminRepository.updateAdmin(id,data);
        return admin;
    }
    const deleteAdmin = async(id)=>{
        const admin = await AdminRepository.deleteAdmin(id);
        return admin;
    }
    return{createAdmin,getAllAdmin,getAdminById,updateAdmin,deleteAdmin}
}

module.exports = AdminService();