require("express-async-errors")

const migrationRun = require("./database/sqlite/migrations") // CONECTANDO BANCO DE DADOS COM SERVIDOR
const AppError = require("./utils/AppError")

const express = require("express") // IMPORTOU EXPRESS
const routes = require("./routes")
const req = require("express/lib/request")

migrationRun(); 

const app = express() // INICIALIZOU O EXPRESS
app.use(express.json()) // PRECISAMOS DEFINIR O PADRÃO PRA RECEBER AS INFOS ATRAVES DO CORPO DA REQUIS
app.use(routes)


// ROUTE PARAMS - são obrigatórios os parametros impostos
//app.get('/message/:id/:user', (request, response) => { // : para saber que é um parametro (id e user são parametros)
//    const { id, user } = request.params // DESCONTRUIR

//    response.send(`
//    Id da mensagem: ${id}. 
//    Usúario ${user}.`) // ENDEREÇO DA ROTA + ENVIO DA RESPOSTA 
//}) // ATRAVÉS DO REQUEST QUE CONSEGUIMOS ENVIAR INFORMAÕES PRA ROTA E OBTER INFORMAÇÕES COM REQUEST
 

// QUERY PARAMS
// app.get('/users', (request, response) => {
//     const { page , limit } = request.query

//     response.send(`
//     Página: ${page}. 
//     Mostrar ${limit}`)
// })

app.use((error, request, response, next) => { // AJUDA O DEV A INDENTIFICAR OS ERROS, SE É SINTAXE ETC.. OU ERRO DO CLIENTE
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message // SE O PROBLEMA NÃO FOR DO LADO DO CLIENTE VOU LANÇAR ESSE ERRO:
        })
    }
    
    console.error(error)

        return response.status(500).json({
            status: "error",
            message: "Internal server error"
    
    }
    )
})

const port = 3333 // CRIAMOS UMA CONSTANTE PARA DEFINIR O NUMERO DA PORTA (OBESERVADOR), ONDE A API FICA AGUARDANDO REQUISIÇOES 

app.listen(port, () => console.log(`Server is running on Port: ${port}`)) // QUANDO EXCECUTAR O SERVER ENVIARÁ ESSA MENSAGEM node + src/nome da pasta ou npm start


