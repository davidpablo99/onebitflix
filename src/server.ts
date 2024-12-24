import express from "express"
import { sequelize } from "./database"
import { adminJs, adminJsRouter } from "./adminjs"
// Essa linha importa o módulo Express, que é um framework para construir aplicações web e APIs em Node.js. Ele facilita o desenvolvimento ao oferecer uma interface simplificada para lidar com rotas, middlewares, requisições e respostas HTTP.
// express: É o nome do módulo instalado pelo comando npm install express.


const app = express()
/*Essa linha cria uma instância da aplicação Express, que é representada pelo objeto app. Esse objeto é o núcleo da aplicação e será usado para:

Definir rotas: Especificar os caminhos (URLs) que sua aplicação vai responder.
Adicionar middlewares: Funções para manipular as requisições e respostas, como autenticação, validação ou parsing de JSON.
Iniciar o servidor: Escutar requisições em uma porta específica.*/

app.use(express.static('public'))

//app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000 //aqui definimos a porta ambiente ou a porta 3000 pra rodar a aplicação.

app.listen(PORT, ()=>{
    sequelize.authenticate().then(()=>{
        console.log(`DB connection successfull`)
    })
    console.log(`Server started successfuly at port ${PORT}`)
})