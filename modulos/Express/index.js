//para instalar o framework express, digite o comando no terminal: npm install express --save
const express = require("express") //constante para evitar mudancas indesejaveis
const app = express()

//criar as rotas da aplicacao
app.get("/", function(req, res){ //req - requisicao e o res - resposta ao cliente
    res.send("Seja bem vindo ao meu app!")
})

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

//abrir servidor e deixar rodando
app.listen(8081, function(){

    console.log("Servidor rodando na url: http://localhost:8081")
}) //porta 8081- localhost