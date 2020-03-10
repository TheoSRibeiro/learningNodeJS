//para instalar o framework express, digite o comando no terminal: npm install express --save
const express = require("express") //constante para evitar mudancas indesejaveis
const app = express();
//BODY PARSER -- RECEBER DADOS DE QUALQUER FORMULARIO DENTRO DO EXPRESS > npm install --save body-parser
const bodyparser = require('body-parser')

/*
//criar as rotas da aplicacao
app.get("/", function(req, res){ //req - requisicao e o res - resposta ao cliente
    //res.send("Seja bem vindo ao meu app!")
    res.sendFile(__dirname+"/html/index.html") // retorna o diretorio padrao (raiz) da aplicacao
})

app.get("/sobre", function(req, res){
    //res.send("Minha pagina sobre!")
    res.sendFile(__dirname+"/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

//criando parametros para as rotas
app.get('/ola/:nome/:cargo/:cor', function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + 
            "<h2>Seu cargo eh: " + req.params.cargo + "</h2>" + 
            "<h3>Sua cor favorita eh: " + req.params.cor + "</h3>") //so pode enviar o send uma unica vez na rota
})
*/
//instalar nodemon, no terminal seguir o comando: npm install nodemon -g

//HANDLEBARS
//instalar o handlebars: npm install --save express-handlebars
const handlebars = require('express-handlebars')
//O módulo SEQUELIZE se conecta automaticamente ao BD
const Sequelize = require('sequelize')

//BODY PARSER
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//Config
    //Template Engine 
    //Deve-se usar o HandleBars como template ENGINE
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    // Conexão com o banco de dados MySQL
        const sequelize = new Sequelize('testesequelize', 'root', '123456', {
            host: "localhost",
            dialect: "mysql"
        }) //vai se conectar a um BD ja existente


//Rotas
app.get('/cad', function(req,res){
    res.render('formulario')
})

app.post('/cadastro',function(req,res){ //USA POST SE A REQUISICAO FOR UM METODO POST
    res.send("Texto: " + req.body.titulo + "Conteúdo: "+req.body.conteudo) 
})


//abrir servidor e deixar rodando
app.listen(8081, function(){

    console.log("Servidor rodando na url: http://localhost:8081")
}) //porta 8081- localhost