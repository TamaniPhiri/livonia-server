const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

async function adminLogin(req,res){
    const { email, password }= req.body;
    try {
        const admin = await Prisma.admin.findUnique({
            where:
            {
                email:email,
            },
        })
        if(admin.password !== password){
            return res.status(401).json({error:'password not correct'})
        }
        if(!admin){
            return res.status(401).json({error:'you are not an admin'});
        }
    } catch (error) {
        
    }
}