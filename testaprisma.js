const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


async function main() {
    //insere um usuario
    const NovoUsuario = await prisma.usuario.create({
        data: {
            nome: "Jose Marya",
            email: "josemarya@gmail.com.br"
        },
    });

    console.log('novo usuario: ', JSON.stringify(NovoUsuario));

    //busca usuario
    const usuarios = await prisma.usuario.findMany();

    console.log('todos os usuarios: ' + JSON.stringify(usuarios));
}


main().catch((erro) => {
    console.log("Error: " + erro);
});