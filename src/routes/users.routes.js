const { Router } = require("express")

const UsersController = require("../controllers/UsersController")
const usersRoutes = Router()

function MyMiddleware(request, response, next) { // COM MIDDLAWERA CONSEGUIMOS ACESSAR A REQUISIÇÃO, A REPOSTA E A CHAMAR O DESTINO)
    console.log("Você passou pelo middleware")
    if(!request.body.isAdmin) {
        return response.json({ message : "User unauthorized" })
    }

    next() // CHAMA A PROXIMA FUNÇÃO, SE NÃO FICA RODANDO ATÉ DAR ERRO
} 

const usersController = new UsersController()


usersRoutes.post('/', MyMiddleware, usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes

// SERVER.JS: PONTO DE ENTRADA, UMA REQUISIÇÃO CHEGA NELE E VAI PARA AS ROTAS
// ROTA: BASEADO NA ROTA VAI PARA O CONTROLLER ONDE VERIFICA A VERACIDADE E DEVOLVE
// CONTROLLER: ONDE VERIFICA E PROCESSA A REQUISIÇÃO