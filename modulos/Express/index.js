//para instalar o framework express, digite o comando no terminal: npm install express --save
const express = require("express") //constante para evitar mudancas indesejaveis
const app = express()

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

//instalar nodemon, no terminal seguir o comando: npm install nodemon -g

//abrir servidor e deixar rodando
app.listen(8081, function(){

    console.log("Servidor rodando na url: http://localhost:8081")
}) //porta 8081- localhost