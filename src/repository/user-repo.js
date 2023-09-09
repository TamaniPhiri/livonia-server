const { PrismaClient } = require('@prisma/client');

const Prisma = new PrismaClient();

const UserRepository = ()=>{
    const createUser= async(data)=>{
        return Prisma.user.create({data});
    };
    const getUsers = async()=>{
        return Prisma.user.findMany();
    };
    const getUserBYId = async(id)=>{
        return Prisma.user.findUnique({
            where:{
                id:parseInt(id)
            },
        });
    };
    const updateUser = async(id,data)=>{
        return Prisma.user.update({
            where:{
                id:parseInt(id),
            },
            data:{
                name:data,
            }
        })
    }
    const deleteUser = async(id)=>{
        return Prisma.user.delete({
            where:{
                id:parseInt(id),
            }
        })
    }
    return{createUser,getUsers,getUserBYId,updateUser,deleteUser}
}

module.exports = UserRepository();