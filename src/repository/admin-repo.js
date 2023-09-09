const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const AdminRepository=()=>{
    const createAdmin = async(data)=>{
        return prisma.admin.create({data});
    };
    const getAdmin= async()=>{
        return prisma.admin.findMany();
    }
    const getAdminById = async(id)=>{
        return prisma.admin.findUnique({
            where:{
                id:parseInt(id)
            },
        });
    };
    const updateAdmin = async(id,data)=>{
        return prisma.admin.update({
            where:{
                id:parseInt(id),
            },
            data:{
                name:data,
            }
        })
    }
    const deleteAdmin = async(id)=>{
        return prisma.admin.delete({
            where:{
                id:parseInt(id),
            }
        })
    }
    return{createAdmin,getAdmin,getAdminById,updateAdmin,deleteAdmin}
}

module.exports = AdminRepository();