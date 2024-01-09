const { Router } = require("express")

const usersRouter = require("./users.routes")

const routes = Router()
routes.use("/users", usersRouter) // TODA VEZ QUE ALGUEM ACESSAR O MEU /USERS VAI SER LEVADO AO USERS ROUTER


module.exports = routes