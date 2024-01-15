const { Router } = require("express")

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")

const routes = Router()
routes.use("/users", usersRouter) // TODA VEZ QUE ALGUEM ACESSAR O MEU /USERS VAI SER LEVADO AO USERS ROUTER
routes.use("/notes", notesRouter) 
routes.use("/tags", tagsRouter) 

module.exports = routes