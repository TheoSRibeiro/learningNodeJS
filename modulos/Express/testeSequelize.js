//O módulo SEQUELIZE se conecta automaticamente ao BD

const Sequelize = require('sequelize')
const sequelize = new Sequelize('testesequelize', 'root', '123456', {
    host:"localhost",
    dialect: "mysql"
}) //vai se conectar a um BD ja existente

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se Conectar, erro: "+erro)
})