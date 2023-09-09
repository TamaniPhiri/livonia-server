const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

async function adminLogin(req,res){
    const { email, password }= req.body;
    try {
        const admin = await Prisma.admin.findUnique({
            where:{
                email,
            },
        })
        if(!admin){
            return res.status(401).json({error:'you are not an admin'});
        }
        if(admin.password !== password){
            return res.status(401).json({error:'password not correct'});
        }
        res.status(200).json({message:'admin successfully logged in'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'})
    }
}


module.exports = {adminLogin};