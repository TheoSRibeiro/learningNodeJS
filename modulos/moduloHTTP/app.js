var http = require('http');

//criar um servidor http para comunicacao
http.createServer(function(req, res){
    res.end("Ola, cliente!") //resposta do servidor retornando uma mensagem
}).listen(8081)

console.log("Servidor rodando!")