const { Router } = require("express")

const NotesController = require("../controllers/NotesController")
const notesRoutes = Router()


const notesController = new NotesController()


notesRoutes.get('/', notesController.index)
notesRoutes.post('/:user_id', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes;

// SERVER.JS: PONTO DE ENTRADA, UMA REQUISIÇÃO CHEGA NELE E VAI PARA AS ROTAS
// ROTA: BASEADO NA ROTA VAI PARA O CONTROLLER ONDE VERIFICA A VERACIDADE E DEVOLVE
// CONTROLLER: ONDE VERIFICA E PROCESSA A REQUISIÇÃO