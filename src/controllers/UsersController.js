const { hash } = require("bcryptjs") // importando para criptografar a senha
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")


class UsersController {
    async create(request, response){
        const {name, email, password, isAdmin} = request.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists) {
            throw new AppError ("Este e-mail já está cadastrado")
        }

        if(!name) {
            throw new AppError("O nome é obrigatório")
        }

        const hasedPassoword = await hash(password, 8) 

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
        [name, email, hasedPassoword])

        return response.status(201).json() // além de responder com send, podemos devolver com json
    }
    
    async update(request, response) {
        const { name, email } = request.body
        const { id } = request.params
   
        const database = await sqliteConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])
   
        if(!user) {
         throw new AppError("Usuário não encontrado")
        }
   
        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])
   
        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
         throw new AppError("Este e-mail já está em uso.")
        }
   
        user.name = name
        user.email= email
   
        await database.run(`
         UPDATE users SET
         name = ?,
         email = ?,
         updated_at = ?
         WHERE id = ?`, 
         [user.name, user.email, new Date(), id]
       )
   
       return response.json()
     }
    /**
     *  index - GET para listar vários registros
     * show - GET para exibir um registro especifico
     * create - POST para criar um registro
     * uptade - PUT atualizar um registro
     * delete - DELETE remove um registro
    */
}

module.exports = UsersController

// UM CONTROLLER PODE TER NO MAX 5 FUNÇÕES OU METODOS