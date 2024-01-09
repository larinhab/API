const AppError = require("../utils")

class UsersController {
    create(request, response){
        const {name, email, password, isAdmin} = request.body

        if(!name) {
            throw new AppError("O nome é obrigatório")
        }

        response.status(201).json({name, email, password, isAdmin}) // além de responder com send, podemos devolver com json
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