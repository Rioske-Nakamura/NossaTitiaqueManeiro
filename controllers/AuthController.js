const {PrismaClient} = require("@prisma/client")
const {Prisma} = new PrismaClient()

class AuthController {
    static async cadastro(req, res){

        const {nome, email, password, tipo} = req.body;
        if(!nome || nome.length < 3 || !email || email.length < 4 || !password || password.length < 8 || !tipo || tipo.length < 2){
            return res.json({
                error: true,
                message: "Preencha todos os campos"
            });
    }
    return res.json({
        error: false,
        message: "Cadastrado com sucesso",
        token: "token",
    });
    
}
    static async login(req, res){
        
    }
}

module.exports = AuthController;