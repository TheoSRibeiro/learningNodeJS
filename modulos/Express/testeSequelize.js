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

//Criacao de Models no Sequelize para Usuarios
const Postagem = sequelize.define('postagens',{
    titulo: { //campo titulo
        type: Sequelize.STRING
    },
    conteudo: { //campo conteudo
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//CRIAR UM REGISTRO NO BD
//apos criar uma postagem, comentar para nao ficar recriando..
/*Postagem.create({
    titulo: "Primeiro Titulo criado!",
    conteudo: "Criando um conteudo e inserindo automaticamente no BD" 

})

Usuario.create({
    nome: "Theo",
    sobrenome: "Ribeiro",
    idade: 28,
    email: "tr@gmail.com"

})
*/

//SINCRONIZAR MODEL DIRETAMENTE NO MYSQL
//usar somente uma vez para nao recriar a tabela no BD
//Postagem.sync({force: true}) //sincronizar o model com o mysql, o parametro force eh para ter certeza que a tabela vai ser gerada
//Usuario.sync({force: true})