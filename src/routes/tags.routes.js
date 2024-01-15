const { Router } = require("express")

const TagsController = require("../controllers/TagsController")
const tagsRoutes = Router()


const tagsController = new TagsController()

tagsRoutes.get('/:user_id', tagsController.index)

module.exports = tagsRoutes;

// SERVER.JS: PONTO DE ENTRADA, UMA REQUISIÇÃO CHEGA NELE E VAI PARA AS ROTAS
// ROTA: BASEADO NA ROTA VAI PARA O CONTROLLER ONDE VERIFICA A VERACIDADE E DEVOLVE
// CONTROLLER: ONDE VERIFICA E PROCESSA A REQUISIÇÃO