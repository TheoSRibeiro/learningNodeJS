//O módulo SEQUELIZE se conecta automaticamente ao BD
const Sequelize = require('sequelize')

// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
}) //vai se conectar a um BD ja existente

//Exportar o Sequelize e sequelize no mesmo arquivo
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}